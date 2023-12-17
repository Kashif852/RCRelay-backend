const errorHandler = require('../../src/middlewares/errorHandler');
const httpMocks = require('node-mocks-http');

describe('Error Handler Middleware', () => {
  let mockError;

  beforeEach(() => {
    mockError = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    mockError.mockRestore();
  });

  it('should handle errors and send the correct response', () => {
    const { req, res } = httpMocks.createMocks();
    const next = jest.fn();
    const error = new Error('Test error');

    errorHandler(error, req, res, next);

    expect(res.statusCode).toBe(500);
    expect(res._getData()).toEqual({ error: 'An unexpected error occurred' });
    expect(console.error).toHaveBeenCalledWith(error.stack); 
  });
});
