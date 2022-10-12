const arr = [1, 100, 34, 56, 23];

let i = 0;

while (i < Math.floor(arr.length / 2)) {
  let j = arr.length - 1 - i;
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
}

console.log(arr);
