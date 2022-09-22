/* 1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value*/

let minNum = 999;
let maxNum = 0;

for (i=1; i<=5; i++){
    let num = Math.floor(Math.random()*(999-100)+100);
    if(minNum > num){
        minNum = num;
    }
    if(maxNum < num){
        maxNum = num;
    }
    console.log(num);
}
console.log("Max among the numbers: " +maxNum+ " ,Minimum among the number: " +minNum);