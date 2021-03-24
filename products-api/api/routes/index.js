const bodyParser = require('body-parser');
const products = require('./productsRoute');
const categories = require('./categoriesRoute');


module.exports = app => {
    app.use(bodyParser.json(),
        products,
        categories
    );
};