var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  let j = 0;
  let prefix = "";
  while (true) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i].length === 0 || (strs[i + 1] && strs[i + 1].length) === 0)
        return prefix;
      if (strs[i][j] !== strs[i + 1][j]) {
        return prefix;
      }
    }
    if (!strs[0][j]) return prefix;
    prefix += strs[0][j];
    j++;
  }
};

const strs = ["flower", "flower", "flower", "flower"];
console.log(longestCommonPrefix(strs));
