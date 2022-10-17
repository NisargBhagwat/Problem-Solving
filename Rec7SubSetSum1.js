// print sum of all subset set of array in ascending order

function subSequece(index, arr, candidates, sum, ans) {
    if (index >= candidates.length) {
        ans.push(sum);
        return;
    }

    const indexValue = candidates[index];
    const nextIndex = index + 1;

    arr.push(indexValue);
    subSequece(nextIndex, arr, candidates, sum + indexValue, ans);

    arr.pop();
    subSequece(nextIndex, arr, candidates, sum, ans);
}

const candidates = [1, 2, 3];
let tempArr = [];
let ans = [];
let sum = 0;

subSequece(0, tempArr, candidates, sum, ans);

console.log(ans.sort((a, b) => a - b));