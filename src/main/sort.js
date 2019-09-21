function sort(el) {
  return typeof el === 'string'
  ? el.split('').sort().join('')
  : el.sort((a, b) => a - b);
}

module.exports = {
  sort 
}; 