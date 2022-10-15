const arr = [50, 60, 70, 80, 10, 20, 55, 90, 100, 150];

function merge(arr1, arr2, inversion) {
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
        inversion += arr1.length - i;
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

  return {
    arr: temp,
    inversionCount: inversion,
  };
}

function countInversion(arr, i, j) {
  if (i == j) {
    return {
      arr: [arr[i]],
      inversionCount: 0,
    };
  }

  const mid = Math.floor((i + j) / 2);
  const { arr: arr1, inversionCount: inversionCount1 } = countInversion(
    arr,
    i,
    mid
  );
  const { arr: arr2, inversionCount: inversionCount2 } = countInversion(
    arr,
    mid + 1,
    j
  );

  return merge(arr1, arr2, inversionCount1 + inversionCount2);
}

console.log(countInversion(arr, 0, arr.length - 1));
