import { capitalizeWords } from './utils.js';

let uniqueIngredients = [];
let uniqueAppliances = [];
let uniqueUstensils = [];

export let selectedIngredientTags = [];
export let selectedAppliancesTags = [];
export let selectedUstensilTags = [];

export function addTag() {
  const tagList = document.querySelector('.tags');
  const clickedTagName = this.innerText;
  let color;

  if (this.parentElement.classList.contains('filter__showList--blue')) {
    color = 'blue';
    uniqueIngredients.splice(uniqueIngredients.indexOf(clickedTagName), 1);
    uniqueIngredients.sort();
    updateTagList(
      uniqueIngredients,
      'ingredientsList',
      '.filter__showList--blue',
    );
    selectedIngredientTags.push(clickedTagName);
  } else if (this.parentElement.classList.contains('filter__showList--red')) {
    color = 'red';
    uniqueUstensils.splice(uniqueUstensils.indexOf(clickedTagName), 1);
    uniqueUstensils.sort();
    updateTagList(uniqueUstensils, 'ustensilList', '.filter__showList--red');
    selectedUstensilTags.push(clickedTagName);
  } else if (this.parentElement.classList.contains('filter__showList--green')) {
    color = 'green';
    uniqueAppliances.splice(uniqueAppliances.indexOf(clickedTagName), 1);
    uniqueAppliances.sort();
    updateTagList(
      uniqueAppliances,
      'applianceList',
      '.filter__showList--green',
    );
    selectedAppliancesTags.push(clickedTagName);
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
  let list = null;
  let listItems = null;
  if (tag.classList.contains('tags__item--blue')) {
    list = document.querySelector('.filter__showList--blue');
    listItems = list.querySelectorAll('.filter__listOption');
    uniqueIngredients.push(tagText);
    selectedIngredientTags.pop(tagText);
    uniqueIngredients.sort();
  } else if (tag.classList.contains('tags__item--green')) {
    list = document.querySelector('.filter__showList--green');
    listItems = list.querySelectorAll('.filter__listOption');
    uniqueAppliances.push(tagText);
    selectedAppliancesTags.pop(tagText);
    uniqueAppliances.sort();
  } else if (tag.classList.contains('tags__item--red')) {
    list = document.querySelector('.filter__showList--red');
    listItems = list.querySelectorAll('.filter__listOption');
    uniqueUstensils.push(tagText);
    selectedUstensilTags.pop(tagText);
    uniqueUstensils.sort();
  }

  const listOption = document.createElement('li');
  listOption.className = 'filter__listOption';
  listOption.innerText = tagText;
  listOption.addEventListener('click', addTag);
  // Loop into list items in order to insert the tag back into alphabetic order
  let index = 0;
  for (let i = 0; i < listItems.length; i++) {
    if (tagText < listItems[i].innerText) {
      index = i;
      break;
    }
  }
  list.insertBefore(listOption, listItems[index]);
  tag.remove();
}

export function createTagElements(recipes) {
  // Extract unique ingredients, appliances and ustensils from recipes AND checking duplicates
  let uniqueIngredients = [];
  let uniqueAppliances = [];
  let uniqueUstensils = [];

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
  addTagList(uniqueIngredients, 'ingredientsList', '.filter__showList--blue');
  addTagList(uniqueAppliances, 'applianceList', '.filter__showList--green');
  addTagList(uniqueUstensils, 'ustensilList', '.filter__showList--red');

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
    addTagList(
      filteredIngredients,
      'ingredientsList',
      '.filter__showList--blue',
    );
  });

  inputRed.addEventListener('input', (event) => {
    const filteredUstensil = uniqueUstensils.filter((ustensil) => {
      return ustensil.toLowerCase().includes(event.target.value.toLowerCase());
    });
    addTagList(filteredUstensil, 'ustensilList', '.filter__showList--red');
  });

  inputGreen.addEventListener('input', (event) => {
    const filteredAppliance = uniqueAppliances.filter((appliance) => {
      return appliance.toLowerCase().includes(event.target.value.toLowerCase());
    });
    addTagList(filteredAppliance, 'applianceList', '.filter__showList--green');
  });

  function addTagList(tags, tagName, className) {
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
}

export function updateTags(recipes) {
  let uniqueIngredients = [];
  let uniqueAppliances = [];
  let uniqueUstensils = [];

  recipes.forEach((recipe) => {
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
  addTagList(uniqueIngredients, 'ingredientsList', '.filter__showList--blue');
  addTagList(uniqueAppliances, 'applianceList', '.filter__showList--green');
  addTagList(uniqueUstensils, 'ustensilList', '.filter__showList--red');
}
