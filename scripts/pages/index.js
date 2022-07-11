function init() {
    RecipesFactory.createRecipeCard(recipesData);
    createFilterIngredients(recipesData);
    createFilterAppliance(recipesData);
    createFilterUstensils(recipesData);
}

init();
