import {
  selectedIngredientTags,
  selectedAppliancesTags,
  selectedUstensilTags,
} from './tags.js';

import { recipesArray } from './factory.js';
import { createRecipeCard } from './displayCard.js';
import { createTagElements, updateTags } from './tags.js';

const cardContainer = document.querySelector('.cards__container');

export function filterDataVersionOne(e) {
  cardContainer.textContent = '';

  const searchedString = e.target.value.toLowerCase().replace(/\s/g, '');

  const filteredArr = recipesArray.filter((recipe) =>
    searchForOccurrences(recipe),
  );

  function searchForOccurrences(recipe) {
    recipe = recipe[0];

    const searchTypes = {
      name: recipe.name.toLowerCase(),
      description: recipe.description.toLowerCase(),
      ingredients: recipe.ingredients.map((ingredient) =>
        ingredient.ingredient.toLowerCase(),
      ),
    };

    for (const prop in searchTypes) {
      if (searchTypes[prop].includes(searchedString)) {
        return true;
      }
    }
  }
  createRecipeCard(filteredArr);
  createTagElements(filteredArr);
  updateTags(filteredArr);
}
