const str1 = "abcbad";
const strLength = str1.length;

function isPalindrom(str1, i, revStr) {
  if (strLength - 1 == i) {
    revStr += str1[i];
    if (str1 == revStr) {
      return true;
    } else {
      return false;
    }
  }

  return isPalindrom(str1, i + 1, revStr + str1[strLength - i - 1]);
}

console.log(isPalindrom(str1, 0, ""));
