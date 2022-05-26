'use strict';

const { isMatchingQuantity, getMatchingItems } = require('../helpers');

module.exports = function executeOperation(data, quantityType, conditionType, matchWithValue) {
  const matchingItems = getMatchingItems(data, conditionType, matchWithValue);
  return isMatchingQuantity(quantityType, data, matchingItems);
};
