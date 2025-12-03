import { pool } from '../config/database.js';
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
    const { first_name, last_name, email, password, type } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const [result] = await pool.query(
            'INSERT INTO users (first_name, last_name, email, password, type) VALUES (?, ?, ?, ?, ?)',
            [first_name, last_name, email, hashedPassword, type]
        );
        return res.status(201).json({ id: result.insertId, first_name, last_name, email, type });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getUser = async (req, res) => {
    const { email } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM users where email=?', [email]);
        return res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = rows[0];

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Return user data WITHOUT password
        const { password: _, ...userWithoutPassword } = user;
        return res.json({ 
            success: true, 
            message: 'Login successful',
            user: userWithoutPassword 
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
