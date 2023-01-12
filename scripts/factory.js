import { recipes } from '../assets/recipes.js';
import { createRecipeCard } from '../scripts/displayCard.js';

export let recipesArray = Object.entries(recipes);

recipesArray.forEach((array) => array.shift());

createRecipeCard(recipesArray);
