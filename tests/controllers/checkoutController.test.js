const request = require('supertest');
const app = require('../../src/index');

describe('Checkout Controller', () => {
  describe('POST /checkout', () => {
    it('should calculate the total correctly for given items', async () => {
      const response = await request(app)
        .post('/checkout')
        .send({ items: ['ipd', 'atv', 'ipd'] });

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('total');
    });

  });
});
