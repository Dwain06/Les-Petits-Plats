function init() {
    RecipesFactory.createRecipeCard(recipesData);
    createFilterIngredients(recipesData);
    createFilterAppliance(recipesData);
    createFilterUstensils(recipesData);
}

init();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }