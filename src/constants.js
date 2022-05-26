'use strict';

module.exports = {
  ALLOWED_QUANTITY_TYPES: ['all', 'some', 'none', 'atLeast', 'exactly'],
  ALLOWED_CONDITION_TYPES: ['in', 'not in', '=', '!=', '>', '>=', '<', '<='],
  ALLOWED_MATCH_WITH_TYPES: [
    {
      conditionType: 'in',
      expectedValueType: ['array']
    },
    {
      conditionType: 'not in',
      expectedValueType: ['array']
    }
  ]
};
