function makesandwich(...items: string[]) {
    console.log("\nMaking a sandwich with the following item \n");
items.forEach(singleItem => 
    console.log(singleItem)
)
console.log("\nNow Enjoy Sandwich");

    
}



makesandwich("Bread", "Butter")
makesandwich("Chicken", "Cheese")
makesandwich("Bread", "Butter", "Egg" ,"Chicken", "Cheese", "Tomato", "Mayo" )