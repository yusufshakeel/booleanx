'use strict';

const { ALLOWED_CONDITION_TYPES } = require('../constants');
const BooleanXError = require('../booleanx-error');

module.exports = function conditionTypeValidator(condition) {
  if (!ALLOWED_CONDITION_TYPES.includes(condition)) {
    throw new BooleanXError({
      message: `Condition should be one of the following: ${ALLOWED_CONDITION_TYPES}`,
      errorData: { condition }
    });
  }
};
