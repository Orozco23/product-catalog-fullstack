import express from 'express';
import morgan from 'morgan';

//Inicialization
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.json({"message":"Welcome to the Product Catalog Backend!"});
});

//Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server is running on http://localhost:${app.get('port')}`);
}); 
