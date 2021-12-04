const sortBasedArray = (dataArray, ruleArray) => {
  const data = [...dataArray];
  const rule = [...ruleArray];

  const result = data.sort((a, b) => {
    const A = a.id;
    const B = b.id;
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
