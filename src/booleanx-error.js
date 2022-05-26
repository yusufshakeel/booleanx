'use strict';

class BooleanXError extends Error {
  constructor({ message, errorData }) {
    super(message);
    this.errorData = errorData;
    this.code = 'BOOLEANX_ERROR';
  }
}

module.exports = BooleanXError;
