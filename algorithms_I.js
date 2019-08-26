for(var i=0; i<5;i++){
    console.log(i)
}
// Predicted: 0, 1, 2, 3, 4




for(var i=0; i<5; i++){
    i = i +1;
    console.log(i);
}
// Predicted: 1, 2, 3, 4, 5
// I was wrong: Found my mistake: there are 2 incrementers  =  1,3,5
// notice that the incrementer inside the loop definition plays a role first, then they both add together.




for(var i=0; i<5; i++){
    i = i + 3;
    console.log(i)
}
// Predicted: 3,7




function y(num1, num2){
    return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
// Predicted: 5, 8




function y(num1, num2){
    console.log(num1);
    return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
// Predicted: 2, 5, 3, 8




a = 15;
console.log(a);
function y(a){
    console.log(a);
    return a;
}
b = y(10);
console.log(b);
// Predicted: 15, 10
// I was wrong: Found my mistake: 15, 10, 10
// The a was defined first, the function is only a definition until it is called (which defines a as 15), but then the b is defining
// the passed in variable as 10, then b is actually calling the function at the same time...it will produce 10, then console.log calls again




a = 15;
console.log(a);
function y(a){
    console.log(a);
    return a*2;
}
b = y(10)
console.log(b);
// Predicted: 15, 10
// I was wrong: I actually am ashamed at how fast I did this assignment. I knew I was going to do it again though!
// 15, 20, 20 is my new prediction: That was a sneaky one, the console.log that was inside the function ran before the return... ;)
// Answer was: 15,10,20