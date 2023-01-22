import { recipesArray } from './factory.js';
import { handleOpenCloseFilters } from './openCloseFilers.js';
import { addTag, removeTag, createTagElements } from './tags.js';
// import { mainSearchV1 } from './mainSearch-v1.js';

const filterElement = document.querySelectorAll('.filter__listOption');
const closeTagElement = document.querySelectorAll('.tags__close');
// const mainSearchBar = document.querySelector('.search__input');

handleOpenCloseFilters();

createTagElements(recipesArray);

// EVENT LISTENERS

// mainSearchBar.addEventListener('input', mainSearchV1);

filterElement.forEach((element) => {
  element.addEventListener('click', addTag);
});

closeTagElement.forEach((closeCross) => {
  closeCross.addEventListener('click', removeTag);
});
