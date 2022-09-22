/*Write a program that reads 5 Random 2 Digit values ,
then find their sum and the average*/

let random1, sum = 0 , avg = 0;
for(i=0; i<5; i++){
    random1 = (Math.floor(Math.random()*99-10)+10);
    sum += random1;
    console.log("The random 5 two digit numbers are: " +random1);
}
console.log("The sum of all 5 Values :" +sum);
avg = sum/5;
console.log("The average of all values :" +avg);