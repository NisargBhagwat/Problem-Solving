const arr = [3, 2, 1];
const length = arr.length;

function subSequece(index, tempArr) {

  if (index >= length) {
    console.log(tempArr);
    return;
  }

  tempArr.push(arr[index]);
  subSequece(index + 1, tempArr);
  tempArr.pop();
  subSequece(index + 1, tempArr);
}

subSequece(0, [], 0);

// T.c = O(n*2^n)
