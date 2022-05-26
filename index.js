'use strict';

const { whereValidator } = require('./src/validators');

function InputBuilder(data) {
  const self = this;

  self.opeartions = [];

  this.pick = selector => {
    self.pick = { selector };
    return self;
  };

  this.where = (quantityType, conditionType, matchWithValue) => {
    whereValidator(quantityType, conditionType, matchWithValue);
    self.opeartions.push({
      logicalOperator: 'AND',
      quantityType,
      conditionType,
      matchWithValue
    });
    return self;
  };

  this.run = () => {
    return data;
  };
}

function BooleanX() {
  this.input = data => {
    return new InputBuilder(data);
  };
}

module.exports = BooleanX;
