const express = require('express');
const app = express();

// Hardcoded in-memory products array
const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' }
];

// basic route
app.get('/', (req, res) => {
  res.send('response for GET request');
});

// route with param
app.get('/products/:brand', (req, res) => {
  const { brand } = req.params;

  const filteredProducts = products.filter(
    product => product.brand === brand
  );

  res.json(filteredProducts);
});

// start server
app.listen(3000, () =>
  console.log(`server start at http://localhost:3000/`)
);
