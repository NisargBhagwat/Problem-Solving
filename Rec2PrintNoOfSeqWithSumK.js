// Pointing Subsequence with sum is k

function subSequece(index, arr, candidates, target) {
  if (index >= candidates.length) {
    if (target == 0) {
      return 1;
    }
    return 0;
  }

  const indexValue = candidates[index];
  const nextIndex = index + 1;

  arr.push(indexValue);
  const l = subSequece(nextIndex, arr, candidates, target - indexValue);

  arr.pop();
  const r = subSequece(nextIndex, arr, candidates, target);

  return l + r;
}

const candidates = [1, 2, 3];
let tempArr = [];
const target = 3;

const count = subSequece(0, tempArr, candidates, target);

console.log(count);

// T.c = O(n*2^n)
