// Pointing Subsequence with sum is k

function subSequece(index, arr, candidates, target) {

  if (index >= candidates.length) {
    if (target == 0) {
      console.log(arr);
      return true;
    }
    return false;
  }

  const indexValue = candidates[index];
  const nextIndex = index + 1;

  arr.push(indexValue);
  if(subSequece(nextIndex, arr, candidates, target - indexValue)){
    return true;
  }

  arr.pop();
  if(subSequece(nextIndex, arr, candidates, target)){
    return true;
  }

  return false;
}

const candidates = [1, 2, 3];
let tempArr = [];
const target = 3;

subSequece(0, tempArr, candidates, target);

// T.c = O(n*2^n)
