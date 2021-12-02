/* eslint-disable no-undef */
const getQueryString = require('../src/getQueryString');

test('empty param', () => {
  expect(getQueryString('', '')).toBe('');
  expect(getQueryString('', 'key')).toBe('');
  expect(getQueryString('?', '')).toBe('');
  expect(getQueryString('?a', '')).toBe('');
  expect(getQueryString('?a=1', '')).toBe('');
  expect(getQueryString('?a=1&b=2', '')).toBe('');
});

test('has not key', () => {
  expect(getQueryString('?', 'key')).toBe('');
  expect(getQueryString('?a', 'key')).toBe('');
  expect(getQueryString('?a=1', 'key')).toBe('');
  expect(getQueryString('?a=1&b=2', 'key')).toBe('');
});

test('has key', () => {
  expect(getQueryString('?key=1', 'key')).toBe('1');
  expect(getQueryString('?key=1&a=2', 'key')).toBe('1');
  expect(getQueryString('?key=1&a=2&b=3', 'key')).toBe('1');
  expect(getQueryString('?key=1&a=2&b=3&c=4', 'key')).toBe('1');
  expect(getQueryString('?a=1&key=2&b=3&c=4', 'key')).toBe('2');
  expect(getQueryString('?a=1&b=2&key=3&c=4', 'key')).toBe('3');
  expect(getQueryString('?a=1&b=2&c=3&key=4', 'key')).toBe('4');
});

test('wrong query', () => {
  expect(getQueryString('www.google.com', 'key')).toBe('');
  expect(getQueryString('https://www.google.com', 'key')).toBe('');
  expect(getQueryString('/home', 'key')).toBe('');
  expect(getQueryString('/home/show', 'key')).toBe('');
});

test('hash', () => {
  expect(getQueryString('#?key=1', 'key')).toBe('');
  expect(getQueryString('/home#key', 'key')).toBe('');
  expect(getQueryString('/home/show#key', 'key')).toBe('');
  expect(getQueryString('/home/show#key=1', 'key')).toBe('');
  expect(getQueryString('/home/show/#key', 'key')).toBe('');
  expect(getQueryString('/home/show/#key=1', 'key')).toBe('');
  expect(getQueryString('/home/show/#?key', 'key')).toBe('');
});
