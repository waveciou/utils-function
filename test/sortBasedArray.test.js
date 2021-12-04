/* eslint-disable no-undef */
const sortBasedArray = require('../src/sortBasedArray');

test('basic sort', () => {
  const data = [
    { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' },
    { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: '10' },
  ];

  const rule = ['3', '1', '6', '7', '8'];

  expect(sortBasedArray(data, rule, 'id')).toStrictEqual([
    { id: '3' }, { id: '1' }, { id: '6' }, { id: '7' }, { id: '8' },
    { id: '2' }, { id: '4' }, { id: '5' }, { id: '9' }, { id: '10' },
  ]);
});

test('none rules', () => {
  const data = [
    { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' },
    { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: '10' },
  ];

  const rule = [];

  expect(sortBasedArray(data, rule, 'id')).toStrictEqual([
    { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' },
    { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: '10' },
  ]);
});

test('none data', () => {
  const data = [];

  const rule = ['3', '1', '6', '7', '8'];

  expect(sortBasedArray(data, rule, 'id')).toStrictEqual([]);
});

test('nonexistent rule', () => {
  const data = [
    { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' },
    { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: '10' },
  ];

  const rule = ['3', '11', '6', '7', '8'];

  expect(sortBasedArray(data, rule, 'id')).toStrictEqual([
    { id: '3' }, { id: '6' }, { id: '7' }, { id: '8' }, { id: '1' },
    { id: '2' }, { id: '4' }, { id: '5' }, { id: '9' }, { id: '10' },
  ]);
});
