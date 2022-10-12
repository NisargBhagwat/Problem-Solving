/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 9) return true;
  let reverse = 0;
  const temp = x;
  while (x) {
    const reminder = x % 10;
    reverse = reverse * 10 + reminder;
    x = parseInt(x / 10);
  }
  if (temp === reverse) return true;
  return false;
};

console.log(isPalindrome(121));
