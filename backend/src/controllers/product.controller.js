import { pool } from '../config/database.js';
import fs from 'fs';

export const createProduct = async (req, res) => {
    const { sku, name, description, price, inventory } = req.body;
    const imagenPath = req.file ? req.file.path : null;

    const validation = validate({sku, name, description, price, inventory});
    if (validation){
        deleteImage(imagenPath);
        return res.status(400).json(validation);
    }

    try {
        const [result] = await pool.query(
            'INSERT INTO products (sku, name, description, price, inventory, image) VALUES (?, ?, ?, ?, ?, ?)',
            [sku, name, description, price, inventory, imagenPath]
        );
        return res.status(201).json({ sku, name, price, inventory });
    } catch (error) {
        deleteImage(imagenPath);
        // Handle error for duplicate SKU
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'SKU already exists' });
        }
        return res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const { sku } = req.params;
    const { name, description, price, inventory, old_image } = req.body;
    const imagenPath = req.file ? req.file.path : null;

    // Validate required fields
    const validation = validate({ sku, name, description, price, inventory });
    if (validation) {
        deleteImage(imagenPath);
        return res.status(400).json(validation);
    }

    try {
        const [result] = await pool.query(
            'UPDATE products SET name = ?, description = ?, price = ?, inventory = ?, image = ?, updated_at = now() WHERE sku = ?',
            [name, description, price, inventory, imagenPath, sku]
        );
        if (result.affectedRows === 0) {
            deleteImage(imagenPath);
            return res.status(404).json({ message: 'Product not found' });
        }
        // Delete old image if a new one was uploaded
        deleteImage(old_image);
        return res.json({ sku, name, description, price, inventory, image: imagenPath });
    } catch (error) {
        deleteImage(imagenPath);
        return res.status(500).json({ error: error.message });
    }
};

export const updateProductNoImage = async (req, res) => {
    const { sku } = req.params;
    const { name, description, price, inventory } = req.body;

    // Validate required fields
    const validation = validate({ sku, name, description, price, inventory });
    if (validation) {
        return res.status(400).json(validation);
    }

    try {
        const [result] = await pool.query(
            'UPDATE products SET name = ?, description = ?, price = ?, inventory = ?, updated_at = now() WHERE sku = ?',
            [name, description, price, inventory, sku]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.json({ sku, name, description, price, inventory });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    const { sku } = req.params;
    try {
        const [result] = await pool.query(
            'UPDATE products SET deleted_at = now() WHERE sku = ?', [sku]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.json({ message: 'Product soft-deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


export const getProductBySKU = async (req, res) => {
    const { sku } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM products where sku = ? AND deleted_at IS NULL', [sku]); 
            return res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Sorting allowed fields
const allowedSorts = {
    "created_at": "created_at ASC",
    "-created_at": "created_at DESC",
    "name": "name ASC",
    "-name": "name DESC",
    "price": "price ASC",
    "-price": "price DESC"
};

export const getProducts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sort = req.query.sort || "created_at";
    const offset = (page - 1) * limit;
    const orderBy = allowedSorts[sort] || allowedSorts["created_at"];  
    
    try {
        const [rows] = await pool.query(
            `SELECT * FROM products 
            WHERE deleted_at IS NULL
            ORDER BY ${orderBy}
            LIMIT ${limit} OFFSET ${offset}`
        ); 
        const [[{ total }]] = await pool.query(
            'SELECT COUNT(*) as total FROM products WHERE deleted_at IS NULL'
        );       
        const totalPages = Math.ceil(total / limit);
        return res.json({
            page,
            limit,
            totalPages,
            totalItems: total,
            data: rows,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// For Clients
// inventory > 5
export const getProductsForClients = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sort = req.query.sort || "created_at";
    const offset = (page - 1) * limit;
    const orderBy = allowedSorts[sort] || allowedSorts["created_at"];

    try {
        const [rows] = await pool.query(
            `SELECT * 
             FROM products 
             WHERE inventory > 5 AND deleted_at IS NULL
             ORDER BY ${orderBy}
             LIMIT ${limit} OFFSET ${offset}`
        ); 
        const [[{ total }]] = await pool.query(
            'SELECT COUNT(*) as total FROM products WHERE inventory > 5 AND deleted_at IS NULL'
        );
        const totalPages = Math.ceil(total / limit);      
        return res.json({
            page,
            limit,
            totalPages,
            totalItems: total,
            data: rows,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const validate = ({sku, name, description, price, inventory}) => {
    console.log(sku);
    // Validate required fields
    if (!sku || !name || !description || !price || !inventory) {
        console.log('validar', sku, name, description, price, inventory);
        return { error: 'All fields (sku, name, description, price, inventory) are required' };
    }

    // Validate if price and inventory are numbers
    if (isNaN(price) || isNaN(inventory)) {
        return { error: 'Price and inventory must be numbers' };
    }

    // Validate positive values
    if (price <= 0 || inventory < 0) {
        return { error: 'Price must be positive and inventory cannot be negative' };
    }
};

const deleteImage = (path) => {
    if (path) {
        fs.unlink(path, (unlinkErr) => {
        if (unlinkErr) console.error('Error deleting image:', unlinkErr);
        });
    }
};
