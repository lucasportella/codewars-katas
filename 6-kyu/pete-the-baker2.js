const getMaxIngredient = (recipe, added) => {
  const recipeKeys = Object.keys(recipe);
  let maxIngredientName = '';
  let maxIngredientNumber = 1;
  for (let i = 0; i < recipeKeys.length; i += 1) {
    if (added[recipeKeys[i]]) {
      let ingredientQuantity = Math.floor(added[recipeKeys[i]] / recipe[recipeKeys[i]]);
      if (Math.floor(added[recipeKeys[i]] % recipe[recipeKeys[i]]) !== 0) {
        ingredientQuantity += 1;
      }
      if (!maxIngredientName || ingredientQuantity > maxIngredientNumber) {
        maxIngredientName = recipeKeys[i];
        maxIngredientNumber = ingredientQuantity;
      }
    }
  }

  return maxIngredientNumber;
};

const getTrueQuantity = (recipe, maxIngredientNumber) => {
  const recipeKeys = Object.keys(recipe);
  const trueQuantityOfIngredients = { ...recipe };
  recipeKeys
    .forEach((ingredient) => {
      trueQuantityOfIngredients[ingredient] *= maxIngredientNumber;
    });
  return trueQuantityOfIngredients;
};

function getMissingIngredients(recipe, added) {
  const maxIngredientNumber = getMaxIngredient(recipe, added);
  const trueQuantityOfIngredients = getTrueQuantity(recipe, maxIngredientNumber);
  Object.keys(trueQuantityOfIngredients).forEach((ingredient) => {
    if (added[ingredient]) {
      trueQuantityOfIngredients[ingredient] -= added[ingredient];
    }
    if (trueQuantityOfIngredients[ingredient] === 0) {
      delete trueQuantityOfIngredients[ingredient];
    }
  });
  return trueQuantityOfIngredients;
}

const addedInput = { flour: 50, eggs: 1 };
const addedInput2 = { eggs: 11, sugar: 100 };
const addedInput3 = { flour: 500, sugar: 200 };
const addedInput4 = { flour: 200, eggs: 3, sugar: 100 };

getMissingIngredients({ flour: 200, eggs: 1, sugar: 100 }, addedInput);
getMissingIngredients({ flour: 200, eggs: 1, sugar: 100 }, addedInput2);
getMissingIngredients({ flour: 200, eggs: 1, sugar: 100 }, addedInput3);
getMissingIngredients({ eggs: 1, sugar: 100 }, addedInput2);
getMissingIngredients({
  carrot: 5, flour: 2000, eggs: 1, sugar: 100,
}, addedInput4); // returns { carrot: 15, flour: 5800, sugar: 200 }
// --> 3 cakes because input uses 3 eggs
