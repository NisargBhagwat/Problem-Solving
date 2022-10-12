const arr = [8, 7, 6, 5, 4, 3, 2, 1];

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

function findMedian(arr, i, j) {
  if (i == j) {
    return [arr[i]];
  }

  const mid = Math.floor((i + j) / 2);
  const arr1 = findMedian(arr, i, mid);
  const arr2 = findMedian(arr, mid + 1, j);

  return merge(arr1, arr2);
}

const temp = findMedian(arr, 0, arr.length - 1);
let median;
if (temp.length % 2 == 0) {
  median = temp[temp.length / 2 - 1] + temp[temp.length / 2];
} else {
  median = temp[(temp.length - 1) / 2];
}

console.log(median/2);
