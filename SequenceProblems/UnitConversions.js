/*@ author- ABHISHEK
*/
// 1. 1ft = 12 in then 42 in = ? ft
let feet = 12;
let convert = 42/feet;
console.log("Value in feet : "+ convert +" Ft");

// 2. Rectangular Plot of 60 feet x 40 feet in meters
let meter = 0.305
let l = 60*meter;
let b = 40*meter;
console.log("Rectangular plot's dimensions in meters are: " +l+ " * " +b+ " meters");

// 3. Calculate area of 25 such plots in acres

let area = l*b;
console.log("Area of 1 plot: " +area+ " meter sq.");
let acre = 0.000247;
let areaInAcre = area * acre;
console.log("Area of 1 plot in acre: " +areaInAcre+ " acres");
console.log("Area of 25 such plots = " +areaInAcre*25+ "acres");