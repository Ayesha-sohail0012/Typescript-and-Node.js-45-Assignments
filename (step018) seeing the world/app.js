"use strict";
let places = [`Islamabad `, `Canada `, `Newyork `, `America `, `Karachi `];
// Print your array in its orignal order.
console.log('original ' + places);
// Print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
// Show that your array is still in its original order by printing it.
console.log('original ' + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log('copy ' + [...places].sort().reverse());
// Reverse the order of your list. Print the array to show that its order has changed.
console.log('copy ' + [...places].sort());
// Reverse the order of your list again. Print the list to show its back to its original order.
console.log('copy ' + [...places].sort().reverse());
// Sort your array so it's stored in alphabetical order. print the array to show that its order has been changed.
console.log('copy ' + [...places].sort());
