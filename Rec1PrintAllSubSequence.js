function subSequece(index, arr, candidates) {
  if (index >= candidates.length) {
    console.log(arr);
    return;
  }

  const indexValue = candidates[index];
  const nextIndex = index + 1;

  arr.push(indexValue);
  subSequece(nextIndex, arr, candidates);

  arr.pop();
  subSequece(nextIndex, arr, candidates);
}

const candidates = [1, 2, 3];
let tempArr = [];

subSequece(0, tempArr, candidates);