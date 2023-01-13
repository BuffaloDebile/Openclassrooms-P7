import { recipesArray } from './factory.js';
import { getFoodImage } from './utils.js';
export function addTag() {
  const tagList = document.querySelector('.tags');
  const clickedTagName = this.innerText;

  const blueTag = this.parentElement.classList.contains(
    'filter__showList--blue',
  );
  const redTag = this.parentElement.classList.contains('filter__showList--red');
  const greenTag = this.parentElement.classList.contains(
    'filter__showList--green',
  );

  if (blueTag) {
    const tag = document.createElement('div');
    tag.className = 'tags__item tags__item--blue';
    tag.innerHTML = `
    <span class="tags__name">${clickedTagName}</span>
    <span class="tags__close"><img src="ressources/images/remove-icon.png" alt="cross icon to remove this tag"></span>
    `;
    tag.dataset.color = 'blue';
    tagList.appendChild(tag);
    tag.addEventListener('click', removeTag);
  } else if (redTag) {
    const tag = document.createElement('div');
    tag.className = 'tags__item tags__item--red';
    tag.innerHTML = `
    <span class="tags__name">${clickedTagName}</span>
    <span class="tags__close"><img src="ressources/images/remove-icon.png" alt="cross icon to remove this tag"></span>
    `;
    tag.dataset.color = 'red';
    tagList.appendChild(tag);
    tag.addEventListener('click', removeTag);
  } else if (greenTag) {
    const tag = document.createElement('div');
    tag.className = 'tags__item tags__item--green';
    tag.innerHTML = `
    <span class="tags__name">${clickedTagName}</span>
    <span class="tags__close"><img src="ressources/images/remove-icon.png" alt="cross icon to remove this tag"></span>
    `;
    tag.dataset.color = 'green';
    tagList.appendChild(tag);
    tag.addEventListener('click', removeTag);
  } else return;

  this.remove();
}

export function removeTag() {
  const tag = this;
  const tagText = tag.firstElementChild.innerText;

  const blueTag = 'tags__item--blue';
  const greenTag = 'tags__item--green';
  const redTag = 'tags__item--red';

  const blueList = document.querySelector('.filter__showList--blue');
  const greenList = document.querySelector('.filter__showList--green');
  const redList = document.querySelector('.filter__showList--red');

  const listOption = document.createElement('li');
  listOption.className = 'filter__listOption';
  listOption.innerText = tagText;
  listOption.addEventListener('click', addTag);

  if (tag.classList.contains(blueTag)) {
    blueList.appendChild(listOption);
  } else if (tag.classList.contains(greenTag)) {
    greenList.appendChild(listOption);
  } else if (tag.classList.contains(redTag)) {
    redList.appendChild(listOption);
  }

  tag.remove();
}

function createTagElements(recipes) {
  const ingredientsList = document.querySelector('.filter__showList--blue');
  const applianceList = document.querySelector('.filter__showList--green');
  const utensilsList = document.querySelector('.filter__showList--red');

  let uniqueItems = [];
  let uniqueAppliances = [];
  let uniqueIngredients = [];

  recipes.forEach((recipe) => {
    recipe = recipe[0];

    recipe.ingredients.forEach((ingredient) => {
      uniqueIngredients.sort();
      // check if already exist to avoid duplicates
      if (!uniqueIngredients.includes(ingredient.ingredient)) {
        uniqueIngredients.push(ingredient.ingredient);
      }
    });

    uniqueIngredients.forEach((item) => {
      const ingredientItem = document.createElement('li');
      ingredientItem.classList.add('filter__listOption');
      ingredientItem.innerHTML = item;
      ingredientsList.appendChild(ingredientItem);
    });

    recipe.appliance;

    const applianceItem = document.createElement('li');
    applianceItem.classList.add('filter__listOption');
    applianceItem.innerHTML = recipe.appliance;
    uniqueItems.push(applianceItem);
    // applianceList.appendChild(applianceItem);

    recipe.ustensils.forEach(function (utensil) {
      const utensilItem = document.createElement('li');
      utensilItem.classList.add('filter__listOption');
      utensilItem.innerHTML = utensil;
      uniqueAppliances.push(utensilItem);
      // utensilsList.appendChild(utensilItem);
    });

    // console.log(uniqueIngredients, uniqueItems, uniqueAppliances);
  });
}

createTagElements(recipesArray);
