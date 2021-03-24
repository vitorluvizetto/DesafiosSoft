const { Router } = require('express');
const CategoryController = require('../controller/CategoryController');

const router = Router();

router.get('/categories', CategoryController.listCategories);

router.get('/categories/:id', CategoryController.listOneCategory);

router.post('/categories', CategoryController.addCategories);

router.put('/categories/:id', CategoryController.updateCategories);

router.delete('/categories/:id', CategoryController.deleteCategories);


module.exports = router;

