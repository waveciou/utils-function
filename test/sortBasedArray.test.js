/* eslint-disable no-undef */
const sortBasedArray = require('../src/sortBasedArray');

test('test', () => {
  const data = [
    { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' },
    { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: '10' },
  ];

  const rule = ['3', '1', '6', '7', '8'];

  expect(sortBasedArray(data, rule)).toStrictEqual([
    { id: '3' }, { id: '1' }, { id: '6' }, { id: '7' }, { id: '8' },
    { id: '2' }, { id: '4' }, { id: '5' }, { id: '9' }, { id: '10' },
  ]);
});
