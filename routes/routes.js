const express = require('express');

const routes = express.Router();

const adminController = require('../controllers/userc');
 
const productController = require('../controllers/productc');
const cartController = require('../controllers/cart');


routes.post('/user',adminController.postUser);
routes.get('/users',adminController.getUser);
routes.get('/users/:userId',adminController.getUserById);
// routes.get('/users/:userId/carts',adminController.getUserById);



routes.post('/product',productController.postProduct);
routes.get('/products',productController.getProduct);

routes.post('/cart',cartController.postCart);
routes.post('/users/:userId/carts',cartController.postCart);

routes.get('/carts',cartController.getCart);

routes.put('/users/:userId/cart',cartController.postAddCart)
routes.patch('/users/:userId/cart',cartController.deleteCart)
routes.get('/users/:userId/cartss',cartController.cartById)




module.exports =routes;

















// routes.get('/users',adminController.getUser);
// routes.get('/users/:userid',adminController.getUserByPk);

// routes.post('/product',shopController.postProduct);
// routes.get('/products',shopController.getProduct);

// routes.get('/products/:productId',shopController.getProductByPk);