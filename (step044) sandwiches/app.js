function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following item \n");
    items.forEach(function (singleItem) {
        return console.log(singleItem);
    });
    console.log("\nNow Enjoy Sandwich");
}
makesandwich("Bread", "Butter");
makesandwich("Chicken", "Cheese");
makesandwich("Bread", "Butter", "Egg", "Chicken", "Cheese", "Tomato", "Mayo");
