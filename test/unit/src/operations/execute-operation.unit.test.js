'use strict';

const executeOperation = require('../../../../src/operations/execute-operation');

describe('Testing executeOperation', () => {
  describe('When all data is ok', () => {
    test('Should return boolean value', () => {
      expect(executeOperation([1, 2], 'all', 'in', [1, 2])).toBeTruthy();
      expect(executeOperation([1, 2], 'all', 'not in', [1, 5, 6])).toBeFalsy();
    });
  });

  describe('When all data is not ok', () => {
    test('Should throw error', () => {
      expect(() => executeOperation([1, 2], 'UNKNOWN', 'UNKNOWN', [1, 2])).toThrow();
    });
  });
});
