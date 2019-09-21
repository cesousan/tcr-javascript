const sort = require('../main/sort').sort;

describe('basic sort', () => {
  it('should sort a number array', () => {
    expect(sort([4,3,5,1,2])).toEqual([1,2,3,4,5]);
  })
  it('should sort [1,2,8,69,7,5]', () => {
    expect(sort([1,2,8,69,7,5])).toEqual([1,2,5,7,8,69]);
  })
  it('should sort strings', () => {
    expect(sort('azerty')).toEqual('aertyz')
  }) 
  it('should chose sort order', () => {
    expect(sort('azerty', false)).toEqual('zytrea');
  });
  it('should throw error if not provided an array or string', () => {
    try {
      sort(null);
    } catch(e) {
      expect(e).toEqual(new Error('can\'t sort!'));
    }
  });
}); 