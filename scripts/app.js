import { recipesArray } from './factory.js';
import { handleOpenCloseFilters } from './openCloseFilers.js';
import { addTag, removeTag } from './tags.js';

const filterElement = document.querySelectorAll('.filter__listOption');
const closeTagElement = document.querySelectorAll('.tags__close');

handleOpenCloseFilters();

// EVENT LISTENERS

filterElement.forEach((element) => {
  element.addEventListener('click', addTag);
});

closeTagElement.forEach((closeCross) => {
  closeCross.addEventListener('click', removeTag);
});
