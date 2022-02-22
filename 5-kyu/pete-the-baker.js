/* eslint-disable no-restricted-syntax */
function cakes(recipe, available) {
  let lowest = false;
  for (const ingredient in recipe) {
    if (available[ingredient]) {
      const isLowest = Math.floor(available[ingredient] / recipe[ingredient]);
      if (!lowest || isLowest < lowest) {
        lowest = isLowest;
      }
    } else { return 0; }
  }

  return lowest;
}

cakes({
  apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100,
}, { sugar: 500, flour: 2000, milk: 2000 });
