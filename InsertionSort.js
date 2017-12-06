var array = [2, 9, 5, 6, 4, 3, 7, 10, 1, 8];



function insertionSort(arr){

  var len = arr.length;
  for (var i = 1; i< len ; i++)
  {
 var nowInserting = arr[i]; //the current value we are trying to insert
 var compIndex = i-1; 
  	console.log(compIndex);

 // the value against which we compare the insert value. 
 //First defined as the element to the left.
 while (nowInserting < arr[compIndex] && compIndex >= 0)
 {
  arr[compIndex+1] = arr[compIndex]; //move item to the right, as it is larger than 'nowInserting'
  compIndex--; //progress to the left with comparisons
 }
  arr[compIndex+1] = nowInserting;
  }
  console.log(arr);
}


insertionSort(array);

