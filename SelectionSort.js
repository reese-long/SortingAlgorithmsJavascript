
console.log(selectionSort([98,3,2,5,4,8,6,7,9]))

function selectionSort(arr){
	var temp;

	for(var i = 0; i < arr.length; i++){
	var startUnsortedIndex = i;  //the position which is being set in the current iteration

		var j = startUnsortedIndex;
		var lowIndex = j;
		for (j; j<arr.length;j++){

			if (arr[j]<arr[lowIndex]){
				lowIndex = j;
			}
		}
		temp = arr[startUnsortedIndex];
		arr[startUnsortedIndex] = arr[lowIndex];
		arr[lowIndex] = temp;
	}
	return arr;
}








