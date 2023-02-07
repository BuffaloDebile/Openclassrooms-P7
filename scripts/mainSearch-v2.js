import { recipesArray } from './factory.js';
import { createRecipeCard, checkIfRecipeIsEmpty } from './displayCard.js';
import {
  createTagElements,
  allSelectedTags,
  filterRecipesByActiveTags,
} from './tags.js';

const cardContainer = document.querySelector('.cards__container');
export function mainSearchV2(e) {
  let searchedWords = [];

  // create an array of searched words from the input value and all selected tags
  if (e.target.value === '') {
    searchedWords = allSelectedTags.map((tag) =>
      tag.toLowerCase().replace(/ /g, ''),
    );
  } else {
    searchedWords = [
      ...e.target.value.toLowerCase().split(' '),
      ...allSelectedTags.map((tag) => tag.toLowerCase().replace(/ /g, '')),
    ];
  }

  // check if the input length is greater than or equal to 3 or if the input is empty
  if (e.target.value.length >= 3 || e.target.value.length === 0) {
    // clear the content of the card container
    cardContainer.textContent = '';

    // filter recipesArray and return recipes that match the searched words
    let filteredArr = recipesArray.filter((recipe) => {
      recipe = recipe[0];

      // create an object of different search types (name, description, ingredients)
      const searchTypes = {
        name: recipe.name.toLowerCase(),
        description: recipe.description.toLowerCase(),
        ingredients: recipe.ingredients
          .map((u) => u.ingredient.toLowerCase().replace(/ /g, ''))
          .join(' '),
        appliance: recipe.appliance.toLowerCase().replace(/ /g, ''),
        ustensils: recipe.ustensils.map((u) =>
          u.toLowerCase().replace(/ /g, ''),
        ),
      };

      // return true if ALL searched words are found in the searchTypes object
      return searchedWords.every((word) => {
        for (const prop in searchTypes) {
          if (searchTypes[prop].includes(word)) {
            return true;
          }
        }
        return false;
      });
    });

    // Loop through all elements in the filteredArr array
    for (let i = 0; i < filteredArr.length - 1; i++) {
      // Loop through elements from 0
      for (let j = 0; j < filteredArr.length - i - 1; j++) {
        // Compare the current element with the next element
        if (filteredArr[j][0].name > filteredArr[j + 1][0].name) {
          // If the current element is greater than the next element, swap their positions in the array
          [filteredArr[j], filteredArr[j + 1]] = [
            filteredArr[j + 1],
            filteredArr[j],
          ];
        }
      }
    }

    // create recipe cards for the filtered and sorted recipes
    createRecipeCard(filteredArr);
    // create tag elements for the filtered and sorted recipes
    createTagElements(filteredArr);
    // filter the sorted array filteredArr again according to the selected tags
    filterRecipesByActiveTags(filteredArr, allSelectedTags);

    // check if there are no recipes found and display message
    checkIfRecipeIsEmpty();
  }
}
