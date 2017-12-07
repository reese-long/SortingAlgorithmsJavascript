a = mergeSort([1, 23, 3, 4, 5, 63, 2, 1, 4, 87, 4, 3]);

function mergeSort(arr) {
  var len = arr.length;
  if (len < 2) {
    return arr;
  }

  var mid = Math.floor(len / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  var l = 0;
  var r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}
