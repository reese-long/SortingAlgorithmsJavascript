var arr = [1,7,3,2,4,1,9,7,5,4,9,3,2,1,6,7,9,4,3,2,1,4,6,7,8,5,4,3];


function quickSort(arr, left, right) {
  if (left < right) {           //left<right means array size of at least 2.left=right = size 1, or negative if nonsese                
    var pIndex = partition(arr, left, right);
    quickSort(arr, left, pIndex - 1);
    quickSort(arr, pIndex + 1, right);
  }
  return arr;
}


function partition(arr, left, right) {
  var pivotIndex = right; //choose the righmost value as the pivot
  var pivotVal = arr[pivotIndex];
  var compareIndex = left; //begin comparing against the pivot from the leftmost position
  for (var i = left; i < right; i++) { //traverse the subarray, rearranging based on pivot
    if (arr[i] <= pivotVal) {
      swap(arr, compareIndex, i);
      compareIndex++;  //increment the index which will establish the boundary between
    }                  //values less than/greater than our pivot each time a value is swapped
  }
  swap(arr, compareIndex, pivotIndex);  //swap the pivot into the correct position(left are values <= pivot)
  return compareIndex;                  //right are values > pivot
}                                       //return compare to serve as left/right boundary for recursive call


function swap(arr, val1, val2) {    //helper function to swap values inside of the partition function
  var temp = arr[val1];
  arr[val1] = arr[val2];
  arr[val2] = temp;
}