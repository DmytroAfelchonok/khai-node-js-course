const express = require('express')
const productRoutes = require('./product.routes');
const { logRequest } = require('./middleware');
const bodyParser = require('body-parser');
const userRouter = require('./user/user.router');
const productRouter = require('./product/product.router');

const app = express();
const PORT = 3000;

app.use(logRequest);
app.use(productRoutes);
app.use(bodyParser.json());
app.use(userRouter);
app.use(productRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});