// backend/src/controllers/productsController.js
const productService = require('../services/productService');

const getProducts = (req, res) => {
  const products = productService.listProducts();
  res.json(products);
};

module.exports = { getProducts };
