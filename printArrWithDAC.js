const arr = [80, 20, 55, 90, 7, 11, 5, 180, 450];

function padac(arr, i, j) {
  if (i == j) {
    console.log(arr[i]);
    return;
  }

  const mid = Math.floor((i + j) / 2);

  padac(arr, i, mid);
  padac(arr, mid + 1, j);

  return;
}

padac(arr, 0, arr.length - 1);
