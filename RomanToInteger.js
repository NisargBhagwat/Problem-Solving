/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const param = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let int = 0;
  for (let i = 0; i < s.length; i++) {
    if (param[s[i]] >= param[s[i + 1]] || i == s.length - 1) {
      int += param[s[i]];
    } else {
      i++;
      int = int + param[s[i]] - param[s[i - 1]];
    }
  }
  return int;
};

console.log(romanToInt("MCMXCIV"));
