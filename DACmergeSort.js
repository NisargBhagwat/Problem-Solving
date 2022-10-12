const arr = [8, 7, 6, 5, 4, 3, 2, 1];
let sortedArr = [];

function merge(arr1, arr2) {
  let temp = [];
  let k = 0;
  let i = 0;
  let j = 0;
  while (k < arr.length) {
    if (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        temp[k] = arr1[i];
        i++;
      } else {
        temp[k] = arr2[j];
        j++;
      }
    } else {
      if (arr1[i]) {
        temp.push(arr1[i]);
        i++;
      }
      if (arr2[j]) {
        temp.push(arr2[j]);
        j++;
      }
    }
    k++;
  }

  return temp;
}

function mergeSort(arr, i, j) {
  if (i == j) {
    return [arr[i]];
  }

  const mid = Math.floor((i + j) / 2);
  const arr1 = mergeSort(arr, i, mid);
  const arr2 = mergeSort(arr, mid + 1, j);

  return merge(arr1, arr2);
}

console.log(mergeSort(arr, 0, arr.length - 1));
