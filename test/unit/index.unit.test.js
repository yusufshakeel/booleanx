'use strict';

const BooleanX = require('../../index');

describe('Testing booleanx', () => {
  const booleanX = new BooleanX();

  describe('Testing simple condition', () => {
    const data = ['APPLE', 'MANGO', 'ORANGE', 'BANANA', 'GURAVA'];

    describe('When condition is satisfies', () => {
      test('Should return true', () => {
        const result = booleanX
          .input(data)
          .where({ atLeast: 1 }, 'in', ['APPLE'])
          .where({ exactly: 1 }, 'in', ['MANGO'])
          .run();

        const result2 = booleanX
          .input([{ name: 'APPLE' }, { name: 'MANGO' }])
          .pick('name')
          .where({ atLeast: 1 }, 'in', ['APPLE 1'])
          .where({ exactly: 1 }, 'in', ['MANGO 2'])
          .run();

        console.log({ result });
        console.log({ result2 });
      });
    });

    describe('When condition is not satisfies', () => {
      test('Should return false', () => {
        //
      });
    });
  });
});
