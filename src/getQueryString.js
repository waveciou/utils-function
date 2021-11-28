/**
  * Get value from query string in URL
  * @param { String } Integral query string.
  * @param { String } The key value of you want to get.
  * @returns { String }
  */

const getQueryString = (query, key) => {
  const queryString = query.split('?');

  if (queryString.length < 2) {
    return '';
  }

  const queryList = queryString[1].split('&');
  const resultList = queryList.reduce((prev, currentItem) => {
    if (currentItem.indexOf(`${key}=`) === 0) {
      const value = currentItem.slice(key.length + 1);
      return [...prev, `${value}`];
    }
    return prev;
  }, []);

  if (resultList.length) {
    return resultList[0];
  }
  return '';
};

export default getQueryString;
