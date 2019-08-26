function multiply(x,y){
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
// Predicted: 2, 3
// I was wrong: 2, 3, undefined
// Why does it log undefined as well? Is it because there is no return value? Should it just log x and y and then finish?
// Oh I see, x and y are defined because they are passed in, then (b) is not able to define because indeed, there is no return from the function.







function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
// Predicted: 6, 10
// CORRECT!







var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
// Predicted: 3, undefined
// Wrong answer: 3, 7
// Why does it log 3, and 7 while the index location is 







var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);







for(var i=0; i<15; i+=2){
    console.log(i);
 }







 for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){       
        console.log(i*j);
    }
 }







 function looping(x,y){
    for(var i=0; i<x; i++){
       for(var j=0; j<x; j++){         
           console.log(i*j);
       } 
    }
 }
 z = looping(3,3);
 console.log(z);







 function looping(x,y){
    for(var i=0; i<x; i++){
       for(var j=0; j<y; j++){         
          console.log(i*j);
       } 
    }
    return x*y;
 }
 z = looping(3,5);
 console.log(z);







 PART2

 function printUpTo(x){
    // your code here
  }
  printUpTo(1000); // should print all the integers from 1 to 1000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false







  function printSum(x){
    var sum =copy 0;
    //your code here
    return sum
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640








  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      //your code here
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6







  Bonus: LargestElement
Create a function that returns the largest element in a given array.  For example largestElement( [1,30,5,7] ) should return 30.