import { recipesArray } from './factory.js';
import { handleOpenCloseFilters } from './openCloseFilers.js';
import { addTag, removeTag, createTagElements } from './tags.js';
import { mainSearchV2 } from './mainSearch-v2.js';

const filterElement = document.querySelectorAll('.filter__listOption');
const closeTagElement = document.querySelectorAll('.tags__close');
const mainSearchBar = document.querySelector('.search__input');

handleOpenCloseFilters();

createTagElements(recipesArray);

// EVENT LISTENERS

mainSearchBar.addEventListener('input', mainSearchV2);

filterElement.forEach((element) => {
  element.addEventListener('click', addTag);
});

closeTagElement.forEach((closeCross) => {
  closeCross.addEventListener('click', removeTag);
});
