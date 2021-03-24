const { Router } = require('express');
const ProductController = require('../controller/ProductController');

const router = Router();

router.get('/products', ProductController.listProducts);

router.get('/products/:id', ProductController.listOneProduct);

router.post('/products', ProductController.addProduct);

router.put('/products/:id', ProductController.updateProduct);

router.delete('/products/:id', ProductController.deleteProduct);


module.exports = router;

