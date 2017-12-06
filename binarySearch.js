function binarySearch(arr,searchVal){
var numOperations = 0;
var low = 0;
var high = arr.length-1;
while(true){

var mid = Math.floor((low+high)/2);

if(arr[mid] == searchVal)
{
	return true;
}
else {
	if(arr[mid]>searchVal){
		high = mid;
	}
	else if(arr[mid]<searchVal){
		low = mid+1;
	}
}
console.log(arr.slice(low,high));
}
}
console.log(binarySearch([1,2,3,4,4,4,4,5,6,7,8,9],9));