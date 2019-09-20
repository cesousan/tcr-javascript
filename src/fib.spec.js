const fib = require('./fib').fib;

describe('fibonnaci', () => {
  
  it('should return 1 if passed 0', () => {
    expect(fib(0)).toEqual(1);    
  })

  it('should return 1 if passed 1', () => {
    expect(fib(1)).toEqual(1)
  });
});
