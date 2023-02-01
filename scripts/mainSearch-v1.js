import { recipesArray } from './factory.js';
import { createRecipeCard, checkIfRecipeIsEmpty } from './displayCard.js';
import { createTagElements, allSelectedTags } from './tags.js';

const cardContainer = document.querySelector('.cards__container');

export function mainSearchV1(e) {
  if (e.target.value.length >= 3 || e.target.value === '') {
    cardContainer.textContent = '';

    const searchedWords = [
      ...e.target.value.toLowerCase().split(' '),
      ...allSelectedTags,
    ];

    console.log(searchedWords);

    const filteredArr = recipesArray.filter((recipe) => {
      recipe = recipe[0];

      const searchTypes = {
        name: recipe.name.toLowerCase(),
        description: recipe.description.toLowerCase(),
        ingredients: recipe.ingredients
          .map((ingredient) => ingredient.ingredient.toLowerCase())
          .join(' '),
      };

      return searchedWords.every((word) => {
        for (const prop in searchTypes) {
          if (searchTypes[prop].includes(word)) {
            return true;
          }
        }
        return false;
      });
    });

    createRecipeCard(filteredArr);
    createTagElements(filteredArr);
    checkIfRecipeIsEmpty();
  }
}
