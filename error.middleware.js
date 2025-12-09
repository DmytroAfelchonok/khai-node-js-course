const errorResponder = (err, request, response, next) => {
   response.header("Content-Type", 'application/json')
   response.status(err.statusCode).send(err.message)
}
module.exports = { errorResponder };

const express = require('express')
const productRoutes = require('./product.routes');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');

const app = express();
const PORT = 3000;

app.use(logRequest);
app.use(productRoutes);
app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});