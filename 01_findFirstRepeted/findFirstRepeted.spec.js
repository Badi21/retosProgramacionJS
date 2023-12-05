const findFirstRepeated = require('./findFirstRepeted')

describe('findFirst', () => {
    test('Test 1', () => {
      expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toEqual(3);
    });
    test('Test 2', () => {
      expect(findFirstRepeated([2, 2])).toEqual(2);
    });
    test('Test 3', () => {
      expect(findFirstRepeated([2, 4, 3, 5, 1])).toEqual(-1);
    });
    test('Test 4', () => {
      expect(findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])).toEqual(1);
    });
    test('Test 5', () => {
      expect(findFirstRepeated([])).toEqual(-1);
    });
  });