function sort(el, sortOrder) {
  if(sortOrder !== false) {
    return typeof el === 'string'
    ? el.split('').sort().join('')
    : el.sort((a, b) => a - b);  
  } else {
    return typeof el === 'string'
    ? el.split('').sort().reverse().join('')
    : el.sort((a, b) => b - a).reverse()
  }
}

module.exports = {
  sort 
}; 