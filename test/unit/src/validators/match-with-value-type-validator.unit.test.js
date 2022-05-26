'use strict';

const matchWithValueTypeValidator = require('../../../../src/validators/match-with-value-type-validator');

describe('Testing matchWithValueTypeValidator', () => {
  describe('When matchWithValue type is of valid type', () => {
    test('Should not throw error', () => {
      expect(() => matchWithValueTypeValidator('in', 'array')).not.toThrow();
      expect(() => matchWithValueTypeValidator('not in', 'array')).not.toThrow();
    });
  });

  describe('When quantity type is of unknown type', () => {
    test('Should throw error', () => {
      expect(() => matchWithValueTypeValidator('in', 'UNKNOWN')).toThrow();
      expect(() => matchWithValueTypeValidator('not in', 'UNKNOWN')).toThrow();
    });
  });
});
