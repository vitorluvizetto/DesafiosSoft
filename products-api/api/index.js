const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());

const port = 3000;

routes(app);

app.listen(port, () => {
    console.log(`A API está funcionando! na porta ${port}`)
});
