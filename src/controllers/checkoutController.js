const { calculateTotal } = require('../services/checkoutService');

const processCheckout = (req, res) => {
  const { items } = req.body; 
  try {
    const total = calculateTotal(items);
    res.json({ total });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { processCheckout };
