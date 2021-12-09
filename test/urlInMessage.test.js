/* eslint-disable no-undef */
const urlInMessage = require('../src/urlInMessage');

test('basic word', () => {
  expect(urlInMessage('', 'span')).toBe('');
  expect(urlInMessage('123', 'span')).toBe('<span>123</span>');
  expect(urlInMessage('123 456', 'span')).toBe('<span>123 456</span>');
  expect(urlInMessage('123 456 789', 'span')).toBe('<span>123 456 789</span>');
});

test('word has url', () => {
  expect(urlInMessage('I have https://google.com', 'span')).toBe('<span>I have </span><span><a href="https://google.com" target="_blank">https://google.com</a></span>');

  expect(urlInMessage('I have https://google.com link', 'span')).toBe('<span>I have </span><span><a href="https://google.com" target="_blank">https://google.com</a></span><span> link</span>');

  expect(urlInMessage('I havehttps://google.com link', 'span')).toBe('<span>I have</span><span><a href="https://google.com" target="_blank">https://google.com</a></span><span> link</span>');

  expect(urlInMessage('https://google.com I have ', 'span')).toBe('<span><a href="https://google.com" target="_blank">https://google.com</a></span><span> I have</span>');
});
