var animalpet = ["dog", "cat", "rabbit"];
console.log('Animals Names :\n');
for (var i = 0; i < animalpet.length; i++) {
    console.log("".concat(animalpet[i]));
}
console.log("Statement :\n");
for (var i = 0; i < animalpet.length; i++) {
    console.log("\nA ".concat(animalpet[i].toLowerCase(), " would make a great pet"));
}
console.log("\nAny of these animal would make a great pet");
