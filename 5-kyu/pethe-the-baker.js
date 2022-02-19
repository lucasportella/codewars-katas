function cakes(recipe, available) {
    lowest = false;
    for (let ingredient in recipe) {
        if (!available[ingredient]){
            return 0
        }
        isLowest = Math.floor(available[ingredient] / recipe[ingredient])
        if (!lowest || isLowest < lowest) {
            lowest = isLowest
        }
    }
    return lowest
}

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));