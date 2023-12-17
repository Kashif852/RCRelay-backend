const { listDiscounts } = require('../services/discountService');

const getDiscounts = (req, res) => {
  const discounts = listDiscounts();
  res.json(discounts);
};

module.exports = { getDiscounts };
