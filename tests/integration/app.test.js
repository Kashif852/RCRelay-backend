const request = require('supertest');
const app = require('../../src/index');

describe('App Integration', () => {
  it('should handle a complete checkout process', async () => {
    const response = await request(app)
      .post('/checkout')
      .send({ items: ['ipd', 'atv', 'ipd'] });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('total');
  });

});
