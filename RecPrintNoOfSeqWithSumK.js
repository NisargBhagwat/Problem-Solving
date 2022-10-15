// Pointing Subsequence with sum is k

const arr = [1, 2, 1, 0];
const length = arr.length;
const k = 2;

function subSequece(index, tempArr, sum) {
  if (index >= length) {
    if (sum == k) {
      return 1;
    }
    return 0;
  }

  tempArr.push(arr[index]);
  sum += arr[index];

  const l = subSequece(index + 1, tempArr, sum);
  sum -= arr[index];

  tempArr.pop();
  const r = subSequece(index + 1, tempArr, sum);

  return l + r;
}

console.log(subSequece(0, [], 0));

// T.c = O(n*2^n)
