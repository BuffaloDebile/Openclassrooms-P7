import { recipesArray } from './factory.js';
import { handleOpenCloseFilters } from './openCloseFilers.js';
import { addTag, removeTag, createTagElements } from './tags.js';
import { filterDataVersionOne } from './mainSearch-v1.js';

const filterListOfTags = document.querySelectorAll('.filter__listOption');
const removeTagElement = document.querySelectorAll('.tags__close');
const mainSearchInput = document.querySelector('.search__input');

createTagElements(recipesArray);
handleOpenCloseFilters();

// EVENT LISTENERS

// main search filter algo
mainSearchInput.addEventListener('input', filterDataVersionOne);

filterListOfTags.forEach((element) => {
  element.addEventListener('click', addTag);
});

removeTagElement.forEach((closeCross) => {
  closeCross.addEventListener('click', removeTag);
});
