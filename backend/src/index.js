import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import userRoutes from './routes/user.routes.js';
import productsRoutes from './routes/product.routes.js';
import { upload } from './config/multer.js';

//Inicialization
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Settings
app.set('port', process.env.PORT || 3000);
app.set('routes', join(__dirname, 'routes'));

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Static files
app.use('/api/images', express.static(join(__dirname, 'uploads')));

//Routes
app.get('/', (req, res) => {
  res.json({"message":"Welcome to the Product Catalog Backend!"});
});
 
app.use(userRoutes);
app.use(productsRoutes);

//Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server is running on http://localhost:${app.get('port')}`);
}); 