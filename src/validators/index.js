'use strict';

const quantityTypeValidator = require('./quantity-type-validator');
const conditionTypeValidator = require('./condition-type-validator');
const matchWithValueTypeValidator = require('./match-with-value-type-validator');
const { getQuantityType, getMatchWithValueType } = require('../helpers');

const whereValidator = (quantityType, conditionType, matchWithValue) => {
  quantityTypeValidator(getQuantityType(quantityType));
  conditionTypeValidator(conditionType);
  matchWithValueTypeValidator(conditionType, getMatchWithValueType(matchWithValue));
};

module.exports = { whereValidator };
