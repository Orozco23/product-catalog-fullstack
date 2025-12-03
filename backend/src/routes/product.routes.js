import { Router } from 'express';
import { createProduct, 
        updateProduct, 
        getProductsForClients, 
        getProducts, 
        getProductBySKU, 
        updateProductNoImage, 
        deleteProduct } from '../controllers/product.controller.js';
import { upload } from '../config/multer.js';

const router = Router();

router.post('/products', upload.single('image'), createProduct);
router.put('/products/:sku', upload.single('image'), updateProduct);
router.put('/products/no-image/:sku', updateProductNoImage);

router.delete('/products/:sku', deleteProduct);

//gets
router.get('/products/clients', getProductsForClients);
router.get('/products', getProducts);
router.get('/products/:sku', getProductBySKU);

export default router;