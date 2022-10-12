const arr = [1, 2, 15, 14, 13, 3, 16, 17];

function test() {
  let i = 0,
    j,
    k;

  while (arr[i] <= arr[i + 1]) {
    i++;
  }

  j = --i;
  i++;

  while (arr[j] < arr[i] && arr[i] >= arr[i + 1]) {
    i++;
  }

  if (arr[i] < arr[j]) return false;
  if (i == arr.length - 1) return true;
  i++;
  while (arr[i] >= arr[j + 1] && i < arr.length - 1) {
    i++;
  }
  if (i == arr.length - 1) return true;
  return false;
}

console.log(test());
