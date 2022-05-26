'use strict';

const { ALLOWED_MATCH_WITH_TYPES } = require('../constants');
const BooleanXError = require('../booleanx-error');

module.exports = function matchWithValueTypeValidator(conditionType, matchWithValueType) {
  const mismatch = ALLOWED_MATCH_WITH_TYPES.find(
    allowedMatchWithType =>
      !allowedMatchWithType.expectedValueType.includes(matchWithValueType) &&
      allowedMatchWithType.conditionType === conditionType
  );

  if (mismatch) {
    throw new BooleanXError({
      message: `matchWithValue passed should be of type: ${mismatch.expectedValueType}`
    });
  }
};
