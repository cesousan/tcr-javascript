function fib(num) {
  if(num < 0) {
    throw new Error('invalid argument');
  }
  if(num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}

module.exports = {
  fib
};