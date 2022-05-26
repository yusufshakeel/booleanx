'use strict';

const quantityTypeValidator = require('../../../../src/validators/quantity-type-validator');

describe('Testing quantityTypeValidator', () => {
  describe('When quantity type is of valid type', () => {
    test('Should not throw error', () => {
      expect(() => quantityTypeValidator('all')).not.toThrow();
      expect(() => quantityTypeValidator('some')).not.toThrow();
      expect(() => quantityTypeValidator('none')).not.toThrow();
      expect(() => quantityTypeValidator('atLeast')).not.toThrow();
      expect(() => quantityTypeValidator('exactly')).not.toThrow();
    });
  });

  describe('When quantity type is of unknown type', () => {
    test('Should throw error', () => {
      expect(() => quantityTypeValidator('UNKNOWN')).toThrow();
    });
  });
});
