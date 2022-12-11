import { recipes } from '../assets/recipes.js';

export let recipesArray = Object.entries(recipes);

recipesArray.forEach((recipe) => {
  let idRecipe = recipe[1].id;
  let nameRecipe = recipe[1].name;
  let personneRecipe = recipe[1].servings;
  let timeRecipe = recipe[1].time;
  let ingredientsRecipe = recipe[1].ingredients;
  let descriptionRecipe = recipe[1].description;
  let appareilsRecipe = recipe[1].appliance;
  let ustensilesRecipe = recipe[1].ustensils;

  class Recipe {
    constructor(
      idRecipe,
      nameRecipe,
      personneRecipe,
      timeRecipe,
      ingredientsRecipe,
      descriptionRecipe,
      appareilsRecipe,
      ustensilesRecipe,
    ) {
      this.idRecipe = idRecipe;
      this.nameRecipe = nameRecipe;
      this.personneRecipe = personneRecipe;
      this.timeRecipe = timeRecipe;
      this.ingredientsRecipe = ingredientsRecipe;
      this.descriptionRecipe = descriptionRecipe;
      this.appareilsRecipe = appareilsRecipe;
      this.ustensilesRecipe = ustensilesRecipe;
    }
  }
});
