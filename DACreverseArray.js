const arr = [1, 100, 34, 56, 23];
const length = arr.length;
let i = 0;

function reverseArray(arr, i) {
  if (i >= Math.floor(arr.length / 2)) return;

  let j = arr.length - 1 - i;
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  reverseArray(arr, i + 1);
  return;
}

reverseArray(arr, 0);

console.log(arr);
