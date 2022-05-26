'use strict';

const { whereValidator } = require('../../../../src/validators');

describe('Testing validators', () => {
  describe('Testing whereValidator', () => {
    describe('When everything is ok', () => {
      test('Should not throw error', () => {
        expect(() => whereValidator('all', 'in', [1, 2, 3])).not.toThrow();
        expect(() => whereValidator({ atLeast: 1 }, 'in', [1, 2, 3])).not.toThrow();
        expect(() => whereValidator({ exactly: 5 }, 'in', [1, 2, 3])).not.toThrow();
      });
    });

    describe('When quantity type is not valid', () => {
      test('Should throw error', () => {
        expect(() => whereValidator({ unknownType: 1 }, 'in', [1, 2, 3])).toThrow();
        expect(() => whereValidator({ atLeast: 'UNKNOWN' }, 'in', [1, 2, 3])).toThrow();
        expect(() => whereValidator({ exactly: 'UNKNOWN' }, 'in', [1, 2, 3])).toThrow();
      });
    });

    describe('When matchWithValue is not valid', () => {
      test('Should throw error', () => {
        expect(() => whereValidator('all', 'in', 'UNKNOWN')).toThrow();
        expect(() => whereValidator('all', 'not in', 'UNKNOWN')).toThrow();
      });
    });
  });
});
