const products = {
    ipd: { name: 'Super iPad', price: 549.99 },
    mbp: { name: 'MacBook Pro', price: 1399.99 },
    atv: { name: 'Apple TV', price: 109.50 },
    vga: { name: 'VGA adapter', price: 30.00 }
  };
  
  const discounts = {
    atv: { type: 'xfory', threshold: 3, discountPrice: 109.50 },
    ipd: { type: 'bulk', threshold: 4, discountPrice: 499.99 }
  };
  
  const calculateTotal = (skus) => {
    let total = 0;
    const counts = {};
  
    skus.forEach(sku => {
      counts[sku] = (counts[sku] || 0) + 1;
    });
  
    for (const [sku, count] of Object.entries(counts)) {
      if (discounts[sku] && discounts[sku].type === 'xfory' && count >= discounts[sku].threshold) {
        const discountTimes = Math.floor(count / discounts[sku].threshold);
        const normalTimes = count % discounts[sku].threshold;
        total += discountTimes * (discounts[sku].threshold - 1) * products[sku].price;
        total += normalTimes * products[sku].price;
      } else if (discounts[sku] && discounts[sku].type === 'bulk' && count > discounts[sku].threshold) {
        total += count * discounts[sku].discountPrice;
      } else {
        total += count * products[sku].price;
      }
    }
  
    return total;
  };
  
  module.exports = { calculateTotal };
  