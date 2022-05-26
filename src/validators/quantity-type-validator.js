'use strict';

const { ALLOWED_QUANTITY_TYPES } = require('../constants');
const BooleanXError = require('../booleanx-error');

module.exports = function quantityTypeValidator(quantityType) {
  if (!ALLOWED_QUANTITY_TYPES.includes(quantityType)) {
    throw new BooleanXError({
      message: `Quantity type should be one of the following: ${ALLOWED_QUANTITY_TYPES}`,
      errorData: { quantityType }
    });
  }
};
