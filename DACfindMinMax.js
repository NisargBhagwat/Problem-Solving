const arr = [80, 20, 55, 90, 7, 11, 5, 180, 450];

function dacmm(arr, i, j) {
  if (i == j)
    return {
      min: arr[i],
      max: arr[i],
    };

  if (i == j - 1) {
    if (arr[i] > arr[j]) {
      return {
        min: arr[j],
        max: arr[i],
      };
    } else {
      return {
        min: arr[i],
        max: arr[j],
      };
    }

    // T.C = O(1);
  } else {
    const mid = Math.floor((i + j) / 2);
    const { min: min1, max: max1 } = dacmm(arr, i, mid);  /* T.C = O(n/2) divde time*/ 
    const { min: min2, max: max2 } = dacmm(arr, mid + 1, j); /* T.C = O(n/2) divide time*/

    const min = min1 <= min2 ? min1 : min2; /* combine time T.C = O(1) */
    const max = max1 >= max2 ? max1 : max2;

    return {
      min,
      max,
    };
  }
}

const { min, max } = dacmm(arr, 0, arr.length - 1);
console.log(min, max);

// recursive fun {
//     2T(n/2) + c
// }
