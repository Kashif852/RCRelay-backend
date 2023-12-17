const { findProductBySku } = require('./productService');

const applyAppleTvDiscount = (quantity, price) => {
  const freeItems = Math.floor(quantity / 3);
  return (quantity - freeItems) * price;
};

const applySuperIpadDiscount = (quantity, price) => {
  const discountPrice = quantity > 4 ? 499.99 : price;
  return quantity * discountPrice;
};

const calculateTotal = (items) => {
  const itemFrequency = items.reduce((freq, sku) => {
    if (!findProductBySku(sku)) throw new Error(`Unknown SKU: ${sku}`);
    freq[sku] = (freq[sku] || 0) + 1;
    return freq;
  }, {});

  let total = 0;

  for (const [sku, quantity] of Object.entries(itemFrequency)) {
    const product = findProductBySku(sku);

    switch (sku) {
      case 'atv':
        total += applyAppleTvDiscount(quantity, product.price);
        break;
      case 'ipd':
        total += applySuperIpadDiscount(quantity, product.price);
        break;
      case 'mbp':
        // MacBook Pro and VGA adapter discount logic, if any
        total += quantity * product.price;
        break;
      default:
        total += quantity * product.price;
    }
  }

  // Apply the free VGA adapter discount for every MacBook Pro sold
  if (itemFrequency['mbp']) {
    const vgaProduct = findProductBySku('vga');
    total -= itemFrequency['mbp'] * vgaProduct.price;
  }

  return total.toFixed(2); 
};

module.exports = { calculateTotal };
