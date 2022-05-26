'use strict';

const conditionTypeValidator = require('../../../../src/validators/condition-type-validator');

describe('Testing conditionTypeValidator', () => {
  describe('When condition type is of valid type', () => {
    test('Should not throw error', () => {
      expect(() => conditionTypeValidator('in')).not.toThrow();
      expect(() => conditionTypeValidator('not in')).not.toThrow();
      expect(() => conditionTypeValidator('=')).not.toThrow();
      expect(() => conditionTypeValidator('!=')).not.toThrow();
      expect(() => conditionTypeValidator('>')).not.toThrow();
      expect(() => conditionTypeValidator('>=')).not.toThrow();
      expect(() => conditionTypeValidator('<')).not.toThrow();
      expect(() => conditionTypeValidator('<=')).not.toThrow();
    });
  });

  describe('When condition type is of unknown type', () => {
    test('Should throw error', () => {
      expect(() => conditionTypeValidator('UNKNOWN')).toThrow();
    });
  });
});
