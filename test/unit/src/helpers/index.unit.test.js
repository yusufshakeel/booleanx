'use strict';

const {
  getQuantityType,
  getMatchWithValueType,
  matchingItemsForInConditionType,
  matchingItemsForNotInConditionType,
  matchingItemsForEqualConditionType,
  matchingItemsForNotEqualConditionType,
  matchingItemsForGreaterThanConditionType,
  matchingItemsForGreaterThanOrEqualConditionType,
  matchingItemsForLesserThanConditionType,
  matchingItemsForLesserThanOrEqualConditionType,
  hasAllMatchingQuantity,
  hasNoneMatchingQuantity,
  hasSomeMatchingQuantity,
  hasExactlyNMatchingQuantity,
  hasAtLeastNMatchingQuantity,
  getMatchingItems,
  isMatchingQuantity
} = require('../../../../src/helpers');

describe('Testing helper functions', () => {
  describe('Testing getQuantityType', () => {
    test('Should be able to return type', () => {
      expect(getQuantityType('all')).toBe('all');
      expect(getQuantityType({ atLeast: 1 })).toBe('atLeast');
    });
  });

  describe('Testing getMatchWithValueType', () => {
    test('Should be able to return type', () => {
      expect(getMatchWithValueType([1, 2])).toBe('array');
      expect(getMatchWithValueType('hello')).toBe('string');
    });
  });

  describe('Testing matchingItemsForInConditionType', () => {
    test('Should return matching items', () => {
      expect(matchingItemsForInConditionType([1, 2, 5], [1, 2, 3, 4])).toStrictEqual([1, 2]);
    });
  });

  describe('Testing matchingItemsForNotInConditionType', () => {
    test('Should return matching items', () => {
      expect(matchingItemsForNotInConditionType([1, 2, 5], [1, 2, 3, 4])).toStrictEqual([5]);
    });
  });

  describe('Testing matchingItemsForEqualConditionType', () => {
    test('Should return matching items', () => {
      expect(matchingItemsForEqualConditionType([1, 2, 2, 3, 5], 2)).toStrictEqual([2, 2]);
    });
  });

  describe('Testing matchingItemsForNotEqualConditionType', () => {
    test('Should return matching items', () => {
      expect(matchingItemsForNotEqualConditionType([1, 2, 2, 3, 5], 2)).toStrictEqual([1, 3, 5]);
    });
  });

  describe('Testing matchingItemsForGreaterThanConditionType', () => {
    test('Should return matching items', () => {
      expect(matchingItemsForGreaterThanConditionType([1, 2, 2, 3, 5], 2)).toStrictEqual([3, 5]);
    });
  });

  describe('Testing matchingItemsForGreaterThanOrEqualConditionType', () => {
    test('Should return matching items', () => {
      expect(matchingItemsForGreaterThanOrEqualConditionType([1, 2, 2, 3, 5], 2)).toStrictEqual([
        2, 2, 3, 5
      ]);
    });
  });

  describe('Testing matchingItemsForLesserThanConditionType', () => {
    test('Should return matching items', () => {
      expect(matchingItemsForLesserThanConditionType([1, 2, 2, 3, 5], 2)).toStrictEqual([1]);
    });
  });

  describe('Testing matchingItemsForLesserThanOrEqualConditionType', () => {
    test('Should return matching items', () => {
      expect(matchingItemsForLesserThanOrEqualConditionType([1, 2, 2, 3, 5], 2)).toStrictEqual([
        1, 2, 2
      ]);
    });
  });

  describe('Testing hasAllMatchingQuantity', () => {
    describe('When quantity matches', () => {
      test('Should return true', () => {
        expect(hasAllMatchingQuantity([1, 2], [1, 2])).toBeTruthy();
      });
    });

    describe('When quantity does not match', () => {
      test('Should return false', () => {
        expect(hasAllMatchingQuantity([1, 2, 3], [1, 2])).toBeFalsy();
      });
    });
  });

  describe('Testing hasNoneMatchingQuantity', () => {
    describe('When quantity matches', () => {
      test('Should return true', () => {
        expect(hasNoneMatchingQuantity([])).toBeTruthy();
      });
    });

    describe('When quantity does not match', () => {
      test('Should return false', () => {
        expect(hasNoneMatchingQuantity([1])).toBeFalsy();
      });
    });
  });

  describe('Testing hasSomeMatchingQuantity', () => {
    describe('When quantity matches', () => {
      test('Should return true', () => {
        expect(hasSomeMatchingQuantity([1, 2, 3], [1])).toBeTruthy();
      });
    });

    describe('When quantity does not match', () => {
      test('Should return false', () => {
        expect(hasSomeMatchingQuantity([1, 2, 3], [1, 2, 3])).toBeFalsy();
        expect(hasSomeMatchingQuantity([1, 2, 3], [])).toBeFalsy();
      });
    });
  });

  describe('Testing hasExactlyNMatchingQuantity', () => {
    describe('When quantity matches', () => {
      test('Should return true', () => {
        expect(hasExactlyNMatchingQuantity([1, 2, 3], 3)).toBeTruthy();
      });
    });

    describe('When quantity does not match', () => {
      test('Should return false', () => {
        expect(hasExactlyNMatchingQuantity([1, 2, 3], 2)).toBeFalsy();
      });
    });
  });

  describe('Testing hasAtLeastNMatchingQuantity', () => {
    describe('When quantity matches', () => {
      test('Should return true', () => {
        expect(hasAtLeastNMatchingQuantity([1, 2, 3], 1)).toBeTruthy();
      });
    });

    describe('When quantity does not match', () => {
      test('Should return false', () => {
        expect(hasAtLeastNMatchingQuantity([1, 2, 3], 4)).toBeFalsy();
      });
    });
  });

  describe('Testing getMatchingItems', () => {
    describe('When there is no metching condition type', () => {
      test('Should throw error', () => {
        expect(() => getMatchingItems([1, 2, 5], 'UNKNOWN', [1, 2, 3, 4])).toThrow();
      });
    });

    describe('Testing matchingItemsForInConditionType', () => {
      test('Should return matching items', () => {
        expect(getMatchingItems([1, 2, 5], 'in', [1, 2, 3, 4])).toStrictEqual([1, 2]);
      });
    });

    describe('Testing matchingItemsForNotInConditionType', () => {
      test('Should return matching items', () => {
        expect(getMatchingItems([1, 2, 5], 'not in', [1, 2, 3, 4])).toStrictEqual([5]);
      });
    });

    describe('Testing matchingItemsForEqualConditionType', () => {
      test('Should return matching items', () => {
        expect(getMatchingItems([1, 2, 2, 3, 5], '=', 2)).toStrictEqual([2, 2]);
      });
    });

    describe('Testing matchingItemsForNotEqualConditionType', () => {
      test('Should return matching items', () => {
        expect(getMatchingItems([1, 2, 2, 3, 5], '!=', 2)).toStrictEqual([1, 3, 5]);
      });
    });

    describe('Testing matchingItemsForGreaterThanConditionType', () => {
      test('Should return matching items', () => {
        expect(getMatchingItems([1, 2, 2, 3, 5], '>', 2)).toStrictEqual([3, 5]);
      });
    });

    describe('Testing matchingItemsForGreaterThanOrEqualConditionType', () => {
      test('Should return matching items', () => {
        expect(getMatchingItems([1, 2, 2, 3, 5], '>=', 2)).toStrictEqual([2, 2, 3, 5]);
      });
    });

    describe('Testing matchingItemsForLesserThanConditionType', () => {
      test('Should return matching items', () => {
        expect(getMatchingItems([1, 2, 2, 3, 5], '<', 2)).toStrictEqual([1]);
      });
    });

    describe('Testing matchingItemsForLesserThanOrEqualConditionType', () => {
      test('Should return matching items', () => {
        expect(getMatchingItems([1, 2, 2, 3, 5], '<=', 2)).toStrictEqual([1, 2, 2]);
      });
    });
  });

  describe('Testing isMatchingQuantity', () => {
    describe('Testing hasAllMatchingQuantity', () => {
      describe('When quantity matches', () => {
        test('Should return true', () => {
          expect(isMatchingQuantity('all', [1, 2], [1, 2])).toBeTruthy();
        });
      });
    });

    describe('Testing hasNoneMatchingQuantity', () => {
      describe('When quantity matches', () => {
        test('Should return true', () => {
          expect(isMatchingQuantity('none', [1, 2, 3], [])).toBeTruthy();
        });
      });
    });

    describe('Testing hasSomeMatchingQuantity', () => {
      describe('When quantity matches', () => {
        test('Should return true', () => {
          expect(isMatchingQuantity('some', [1, 2, 3], [1])).toBeTruthy();
        });
      });
    });

    describe('Testing hasExactlyNMatchingQuantity', () => {
      describe('When quantity matches', () => {
        test('Should return true', () => {
          expect(isMatchingQuantity({ exactly: 3 }, [1, 2, 3], [1, 2, 3])).toBeTruthy();
        });
      });
    });

    describe('Testing hasAtLeastNMatchingQuantity', () => {
      describe('When quantity matches', () => {
        test('Should return true', () => {
          expect(isMatchingQuantity({ atLeast: 1 }, [1, 2, 3], [1, 2, 3])).toBeTruthy();
        });
      });
    });

    describe('When non of the quantityType matches', () => {
      test('Should throw error', () => {
        expect(() => isMatchingQuantity('UNKNOWN', [1, 2, 3], [1, 2, 3])).toThrow();
      });
    });
  });
});
