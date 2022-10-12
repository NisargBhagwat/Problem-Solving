const arr = [1, 5, 8, 2, 4];
arr.sort();
let first = 0;
let last = arr.length - 1;
const result = [];
for (let i = 1; i <= arr.length; i++)
{
  if (i % 2 != 0) {
    result.push(arr[first]);
    first++;
  } else {
    result.push(arr[last]);
    last--;
  }
}

console.log(result);
