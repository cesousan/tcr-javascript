const fib = require('./fib').fib;

describe('fibonnaci', () => {
  it('should return 1 if passed 1', () => {
    expect(fib(1)).toEqual(1)
  });
});