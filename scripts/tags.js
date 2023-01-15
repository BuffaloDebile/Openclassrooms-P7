import { recipesArray } from './factory.js';
import { capitalizeWords } from './utils.js';

export function addTag() {
  const tagList = document.querySelector('.tags');
  const clickedTagName = this.innerText;
  let color;

  if (this.parentElement.classList.contains('filter__showList--blue')) {
    color = 'blue';
  } else if (this.parentElement.classList.contains('filter__showList--red')) {
    color = 'red';
  } else if (this.parentElement.classList.contains('filter__showList--green')) {
    color = 'green';
  } else {
    return;
  }

  const tag = document.createElement('div');
  tag.className = `tags__item tags__item--${color}`;
  tag.innerHTML = `
    <span class="tags__name">${clickedTagName}</span>
    <span class="tags__close"><img src="ressources/images/remove-icon.png" alt="cross icon to remove this tag"></span>
  `;
  tag.dataset.color = color;
  tagList.appendChild(tag);
  tag.addEventListener('click', removeTag);
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
    blueList.insertBefore(listOption, blueList.firstChild);
  } else if (tag.classList.contains(greenTag)) {
    greenList.insertBefore(listOption, greenList.firstChild);
  } else if (tag.classList.contains(redTag)) {
    redList.insertBefore(listOption, redList.firstChild);
  }

  tag.remove();
}

function createTagElements(recipes) {
  let uniqueIngredients = [];
  let uniqueAppliances = [];
  let uniqueUstensils = [];

  // Extract unique ingredients, appliances and ustensils from recipes AND checking duplicates
  recipes.forEach((recipe) => {
    recipe = recipe[0];

    recipe.ingredients.forEach((ingredient) => {
      ingredient = capitalizeWords(ingredient.ingredient);
      if (!uniqueIngredients.includes(ingredient)) {
        uniqueIngredients.push(ingredient);
      }
    });

    if (!uniqueAppliances.includes(recipe.appliance)) {
      let appliance = capitalizeWords(recipe.appliance);
      uniqueAppliances.push(appliance);
    }

    recipe.ustensils.forEach((ustensil) => {
      ustensil = capitalizeWords(ustensil);
      if (!uniqueUstensils.includes(ustensil)) {
        uniqueUstensils.push(ustensil);
      }
    });
  });

  // Sort the unique arrays
  uniqueIngredients.sort();
  uniqueAppliances.sort();
  uniqueUstensils.sort();

  // Add tags
  addTags(uniqueIngredients, 'ingredientsList', '.filter__showList--blue');
  addTags(uniqueAppliances, 'applianceList', '.filter__showList--green');
  addTags(uniqueUstensils, 'ustensilList', '.filter__showList--red');

  // Get DOM elements
  const inputRed = document.querySelector('.filter_input--red');
  const inputBlue = document.querySelector('.filter_input--blue');
  const inputGreen = document.querySelector('.filter_input--green');

  // Add event listeners for filtering tags

  inputBlue.addEventListener('input', (event) => {
    const filteredIngredients = uniqueIngredients.filter((ingredient) => {
      return ingredient
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    addTags(filteredIngredients, 'ingredientsList', '.filter__showList--blue');
  });

  inputRed.addEventListener('input', (event) => {
    const filteredUstensil = uniqueUstensils.filter((ustensil) => {
      return ustensil.toLowerCase().includes(event.target.value.toLowerCase());
    });
    addTags(filteredUstensil, 'ustensilList', '.filter__showList--red');
  });

  inputGreen.addEventListener('input', (event) => {
    const filteredAppliance = uniqueAppliances.filter((appliance) => {
      return appliance.toLowerCase().includes(event.target.value.toLowerCase());
    });
    addTags(filteredAppliance, 'applianceList', '.filter__showList--green');
  });
}

createTagElements(recipesArray);

function addTags(tags, tagName, className) {
  const tagList = document.querySelector(className);

  tagList.innerHTML = ''; // clear the list before adding new tags

  tags.forEach((tag) => {
    const tagItem = document.createElement('li');
    tagItem.classList.add('filter__listOption');
    tagItem.innerText = tag;
    tagItem.addEventListener('click', addTag);

    tagList.appendChild(tagItem);
  });
}
