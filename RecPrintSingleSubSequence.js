// Pointing Subsequence with sum is k

const arr = [1, 2, 1];
const length = arr.length;
const k = 2;

function subSequece(index, tempArr, sum) {
  if (index >= length) {
    if (sum == k) {
      console.log(tempArr);
      return true;
    }
    return false;
  }

  tempArr.push(arr[index]);
  sum += arr[index];

  if (subSequece(index + 1, tempArr, sum)) {
    return true;
  }
  sum -= arr[index];

  tempArr.pop();
  if (subSequece(index + 1, tempArr, sum)) {
    return true;
  }
}

subSequece(0, [], 0);
// T.c = O(n*2^n)
