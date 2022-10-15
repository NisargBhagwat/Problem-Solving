// Pointing Subsequence with sum is k

const arr = [1, 2, 1, 0];
const length = arr.length;
const k = 2;

function subSequece(index, tempArr, sum) {
  if (index >= length) {
    if (sum == k) {
      console.log(tempArr);
      return;
    }
    return;
  }

  tempArr.push(arr[index]);
  sum += arr[index];

  subSequece(index + 1, tempArr, sum);
  sum -= arr[index];

  tempArr.pop();
  subSequece(index + 1, tempArr, sum);
}

subSequece(0, [], 0);

// T.c = O(n*2^n)
