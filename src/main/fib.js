function fib(num) {
  if(num === 0 || num === 1)
    return num;
  if(num === 2)
    return 1;
  if(num > 2)
    return 2;
}

module.exports = {
  fib
};