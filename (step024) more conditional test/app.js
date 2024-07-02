"use strict";
let car = 'subaru';
let age = 20;
let number = [2, 4, 6, 8, 10, 12, 14];
// ****string test****
// True test
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True 
//False test
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // false
// ****Lower case function test****
// True test
console.log("Is car.toLowercase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True 
// False test
console.log("Is car.toLowercase() == 'bmw'? I predict False.");
console.log(car.toLowerCase() == 'bmw'); // False
// ****Numerical test****
// True test
console.log("Is age == 20? I predict True.");
console.log(age == 20); // True 
// False test
console.log("Is  age != 25? I predict False.");
console.log(age != 25); // False
// ****Greater than & Less than ****
// True test
console.log("Is age > 18? I predict True.");
console.log(age > 18); // True 
// False test
console.log("Is  age < 18? I predict False.");
console.log(age < 18); // False
// ****Greater than or equal to & Less than or equal to ****
// True test
console.log("Is age >= 18? I predict True.");
console.log(age >= 18); // True 
// False test
console.log("Is  age <= 15? I predict False.");
console.log(age <= 15); // False
// ****AND OR opreations test****
// True test with "AND" opreators
console.log("Is  10 <age < 22? I predict True.");
console.log(age < 22 && age > 10); // True 
// False test with "OR" operators
console.log("Is  age > 5 or age < 15? I predict False.");
console.log(age > 20 || age < 15); // False
// ****Test weather or item is in array****
// True test
console.log("Is '2' in numbers? I predict True.");
console.log(2 in number); // True 
// False test
console.log("Is '11' in numbers? I predict False.");
console.log(11 in number); // False
