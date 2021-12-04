/**
  * Sort array based another array's id.
  * @param { [{ id: string }] } Sorted array.
  * @param { [ string ] } Array that sorting rules.
  * @param { string } Name of key.
  * @returns { [{ id: string }] }
  */

const sortBasedArray = (sortedArray, ruleArray, key) => {
  const data = [...sortedArray];
  const rule = [...ruleArray];

  const result = data.sort((a, b) => {
    const A = a[key];
    const B = b[key];
    const ruleA = rule.indexOf(A) < 0 ? rule.length : rule.indexOf(A);
    const ruleB = rule.indexOf(B) < 0 ? rule.length : rule.indexOf(B);

    if (ruleA < ruleB) {
      return -1;
    } if (ruleA > ruleB) {
      return 1;
    }
    return 0;
  });

  return result;
};

module.exports = sortBasedArray;
