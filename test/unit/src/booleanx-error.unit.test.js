'use strict';

const BooleanXError = require('../../../src/booleanx-error');

describe('Testing BooleanXError', () => {
  test('Should be able to set error', () => {
    const err = new BooleanXError({ message: 'Some error message', errorData: { key: 'value' } });
    expect(err.message).toBe('Some error message');
    expect(err.code).toBe('BOOLEANX_ERROR');
    expect(err.errorData).toStrictEqual({ key: 'value' });
  });
});
