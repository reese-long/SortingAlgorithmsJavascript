function bubbleSort(arr)
{
	var count = arr.length;
	var numSwaps = 0;
	var modified = true;

	while(count--){
		if (modified == false){
				break;
		}
		for(var i = 0;i<arr.length;i++)
		{
			var j= i+1;
			if(arr[i]>arr[j]){
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
				modified = true;
				numSwaps++;
			}
			else {modified = false;}

			
			}
			
	
	}
	console.log(numSwaps);
	return arr;
}


arr = [1,3,2,4,5,6,7,8,9];
var a = bubbleSort(arr);
console.log(a);