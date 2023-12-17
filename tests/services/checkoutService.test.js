
const { calculateTotal } = require('../../src/services/checkoutService');
const productService = require('../../src/services/productService');

jest.mock('../../src/services/productService');

describe('Checkout Service', () => {
  beforeAll(() => {
    productService.findProductBySku.mockImplementation((sku) => {
      const products = {
        'atv': { price: 109.50 },
        'ipd': { price: 549.99 },
        'mbp': { price: 1399.99 },
        'vga': { price: 30.00 }
      };
      return products[sku];
    });
  });

  it('calculates the correct total for 2 ipds and 1 atv', () => {
    const items = ['ipd', 'atv', 'ipd'];
    const total = calculateTotal(items);
    const expectedTotal = (2 * 549.99 + 109.50).toFixed(2); 
    expect(total).toBe(expectedTotal);
  });

  it('calculates the correct total for 3 atvs and 1 vga (3 for 2 deal on atvs)', () => {
    const items = ['atv', 'atv', 'atv', 'vga'];
    const total = calculateTotal(items);
    const expectedTotal = (2 * 109.50 + 30.00).toFixed(2); 
    expect(total).toBe(expectedTotal);
  });

  it('calculates the correct total for multiple ipds and atvs (bulk discount on ipds)', () => {
    const items = ['atv', 'ipd', 'ipd', 'atv', 'ipd', 'ipd', 'ipd'];
    const total = calculateTotal(items);
    const expectedTotal = ((2 * 109.50) + (5 * 499.99)).toFixed(2);
    expect(total).toBe(expectedTotal);
  });
  

  it('calculates the correct total for mbp, vga, and ipd (free vga with every mbp)', () => {
    const items = ['mbp', 'vga', 'ipd'];
    const total = calculateTotal(items);
    const expectedTotal = (1399.99 + 549.99).toFixed(2); 
    expect(total).toBe(expectedTotal);
  });

});
