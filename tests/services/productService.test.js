const { listProducts, findProductBySku } = require('../../src/services/productService');

describe('Product Service', () => {
  it('listProducts returns an array of all products', () => {
    const products = listProducts();
    expect(products).toBeInstanceOf(Array);
  });

  it('findProductBySku returns a product for a known SKU', () => {
    const product = findProductBySku('ipd');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
  });
});
