'use strict';

const BooleanXError = require('../booleanx-error');

const getQuantityType = quantityType => {
  if (typeof quantityType === 'object') {
    return typeof Object.values(quantityType)[0] === 'number' ? Object.keys(quantityType)[0] : null;
  }
  return quantityType;
};

const getMatchWithValueType = matchWithValue => {
  if (Array.isArray(matchWithValue)) {
    return 'array';
  }
  return typeof matchWithValue;
};

const matchingItemsForInConditionType = (data, matchWithValue) => {
  return data.filter(dataItem => matchWithValue.includes(dataItem));
};

const matchingItemsForNotInConditionType = (data, matchWithValue) => {
  return data.filter(dataItem => !matchWithValue.includes(dataItem));
};

const matchingItemsForEqualConditionType = (data, matchWithValue) => {
  return data.filter(dataItem => matchWithValue === dataItem);
};

const matchingItemsForNotEqualConditionType = (data, matchWithValue) => {
  return data.filter(dataItem => matchWithValue !== dataItem);
};

const matchingItemsForGreaterThanConditionType = (data, matchWithValue) => {
  return data.filter(dataItem => dataItem > matchWithValue);
};

const matchingItemsForGreaterThanOrEqualConditionType = (data, matchWithValue) => {
  return data.filter(dataItem => dataItem >= matchWithValue);
};

const matchingItemsForLesserThanConditionType = (data, matchWithValue) => {
  return data.filter(dataItem => dataItem < matchWithValue);
};

const matchingItemsForLesserThanOrEqualConditionType = (data, matchWithValue) => {
  return data.filter(dataItem => dataItem <= matchWithValue);
};

const hasAllMatchingQuantity = (data, matchingItems) => {
  return data.length === matchingItems.length;
};

const hasNoneMatchingQuantity = matchingItems => {
  return matchingItems.length === 0;
};

const hasSomeMatchingQuantity = (data, matchingItems) => {
  return matchingItems.length >= 1 && matchingItems.length < data.length;
};

const hasAtLeastNMatchingQuantity = (matchingItems, minimumNumberOfItems) => {
  return matchingItems.length >= minimumNumberOfItems;
};

const hasExactlyNMatchingQuantity = (matchingItems, requiredNumberOfItems) => {
  return matchingItems.length === requiredNumberOfItems;
};

const getMatchingItems = (data, conditionType, matchWithValue) => {
  if (conditionType === 'in') {
    return matchingItemsForInConditionType(data, matchWithValue);
  } else if (conditionType === 'not in') {
    return matchingItemsForNotInConditionType(data, matchWithValue);
  } else if (conditionType === '=') {
    return matchingItemsForEqualConditionType(data, matchWithValue);
  } else if (conditionType === '!=') {
    return matchingItemsForNotEqualConditionType(data, matchWithValue);
  } else if (conditionType === '>') {
    return matchingItemsForGreaterThanConditionType(data, matchWithValue);
  } else if (conditionType === '>=') {
    return matchingItemsForGreaterThanOrEqualConditionType(data, matchWithValue);
  } else if (conditionType === '<') {
    return matchingItemsForLesserThanConditionType(data, matchWithValue);
  } else if (conditionType === '<=') {
    return matchingItemsForLesserThanOrEqualConditionType(data, matchWithValue);
  }
  throw new BooleanXError({ message: 'Condition type is invalid' });
};

const isMatchingQuantity = (quantityType, data, matchingItems) => {
  const qtyType = getQuantityType(quantityType);
  if (qtyType === 'all') {
    return hasAllMatchingQuantity(data, matchingItems);
  } else if (qtyType === 'some') {
    return hasSomeMatchingQuantity(data, matchingItems);
  } else if (qtyType === 'none') {
    return hasNoneMatchingQuantity(matchingItems);
  } else if (qtyType === 'atLeast') {
    return hasAtLeastNMatchingQuantity(matchingItems, quantityType.atLeast);
  } else if (qtyType === 'exactly') {
    return hasExactlyNMatchingQuantity(matchingItems, quantityType.exactly);
  }
  throw new BooleanXError({ message: 'Quantity type is invalid' });
};

module.exports = {
  getQuantityType,
  getMatchWithValueType,
  matchingItemsForInConditionType,
  matchingItemsForNotInConditionType,
  matchingItemsForEqualConditionType,
  matchingItemsForNotEqualConditionType,
  matchingItemsForGreaterThanConditionType,
  matchingItemsForGreaterThanOrEqualConditionType,
  matchingItemsForLesserThanConditionType,
  matchingItemsForLesserThanOrEqualConditionType,
  hasAllMatchingQuantity,
  hasNoneMatchingQuantity,
  hasSomeMatchingQuantity,
  hasExactlyNMatchingQuantity,
  hasAtLeastNMatchingQuantity,
  getMatchingItems,
  isMatchingQuantity
};
