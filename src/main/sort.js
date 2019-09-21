function sort(el, sortOrder) {
  if(sortOrder !== false) {
    return typeof el === 'string'
    ? el.split('').sort().join('')
    : el.sort((a, b) => a - b);  
  } else {
    return typeof el === 'string'
    ? el.split('').sort().reverse().join('')
    : el.sort((a, b) => b - a);
  }
}

function sortString(str, order) {
  const strArr = str.split('').sort();
  return order === false ? strArr.reverse().join() : strArr.join();
}

function sortArray(arr, order) {
  return arr.sort((a, b) => order === false ? b - a : a - b);
}

module.exports = {
  sort 
}; 