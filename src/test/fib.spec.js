const fib = require('../main/fib').fib;

describe('fibonnaci', () => {
  
  it('should return 1 if passed 0', () => {
    expect(fib(0)).toEqual(0);    
  })

  it('should return 1 if passed 1', () => {
    expect(fib(1)).toEqual(1)
  });

  it('should return 1 if passed 2', () => {
    expect(fib(2)).toEqual(1)
  });
  it('should return 2 if passed 3', () => {
    expect(fib(3)).toEqual(2);
  });
});
