/* eslint-disable no-cond-assign */
/* eslint-disable prefer-const */
/* eslint-disable no-useless-escape */

/**
  * Message enable the URL click.
  * @param { _content: string } Message text.
  * @param { _tagName: string } Tag name of excerpt.
  * @returns string
  */

const urlInMessage = (_content, _tagName = 'span') => {
  const URL_REX = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g;
  const regex = new RegExp(URL_REX);
  const content = _content.trim();
  const tegName = _tagName === '' ? 'span' : _tagName;

  let excerpts = [];
  let match = '';
  let startIndex = 0;

  if (content === '') {
    return '';
  }

  while ((match = regex.exec(content)) !== null) {
    excerpts.push({
      text: content.substr(startIndex, (match.index - startIndex)),
      type: 'text',
    });

    excerpts.push({
      text: content.substr(match.index, match[0].length),
      type: 'link',
    });

    startIndex = match.index + (match[0].length);
  }

  if (startIndex < content.length) {
    excerpts.push({
      text: content.substr(startIndex),
      type: 'text',
    });
  }

  const result = excerpts.reduce((prevExcerpt, excerpt) => {
    const { type, text } = excerpt;

    const excerptContent = type === 'link'
      ? `<a href="${text}" target="_blank">${text}</a>`
      : `${text}`;

    return `${prevExcerpt}<${tegName}>${excerptContent}</${tegName}>`;
  }, '');

  return result.replace(`<${tegName}></${tegName}>`, '');
};

module.exports = urlInMessage;
