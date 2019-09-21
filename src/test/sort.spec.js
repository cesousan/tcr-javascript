const sort = require('../main/sort').sort;

describe('basic sort', () => {
  it('should sort a number array', () => {
    expect(sort([4,3,5,1,2])).toEqual([1,2,3,4,5]);
  })
})