// Use REPL – Add two Random Dice Number and Print the Result
let random1, random2, sum;
random1 = (Math.floor(Math.random()*6)+1);
random2 = (Math.floor(Math.random()*6)+1);
sum = random1 + random2;
console.log("first number: "+random1);
console.log("second number: "+random2);
console.log("Sum of two random dice digits is: " +sum);
