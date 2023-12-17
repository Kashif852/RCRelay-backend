const discounts = [
    { sku: 'atv', type: 'xfory', threshold: 3, discountPrice: 109.50 },
    { sku: 'ipd', type: 'bulk', threshold: 4, discountPrice: 499.99 }
  ];
  
  const listDiscounts = () => {
    return discounts;
  };
  
  module.exports = { listDiscounts };
  