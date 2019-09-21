function sort(el, sortOrder) {
  if(typeof el === 'string') return sortString(el, sortOrder);
  if(Array.isArray(el)) return sortArray(el, sortOrder);
  throw new Error('can\'t sort!');
}

function sortString(str, order) {
  const strArr = str.split('').sort();
  return order === false ? strArr.reverse().join('') : strArr.join('');
}

function sortArray(arr, order) {
  return arr.sort((a, b) => order === false ? b - a : a - b);
} 

module.exports = {
  sort 
};