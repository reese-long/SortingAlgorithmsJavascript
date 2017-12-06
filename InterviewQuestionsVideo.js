var j = 0;
var k = 0;
for (var i =0; i<100; i++)
{
	j = ++j;
	k = k++;

}
console.log(j, k) //100 0

//https://www.youtube.com/watch?v=1ySvB8u6lXk&t=758s

var arr = [1,2,3,4,5,6];

//Prime factors:

function primeFactors(n){
  var factors = [], 
      divisor = 2;
  
  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n/ divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;
}

console.log(primeFactors(10));