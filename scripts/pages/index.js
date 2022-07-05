function init() {
    const recipesSection = document.querySelector("#recipes");
    console.log(recipes);

    recipes.forEach((recipe) => {
        const recipeCard = new RecipesFactory(recipe);
        const recipeCardDOM = recipeCard.getRecipeCardDOM();
        recipesSection.appendChild(recipeCardDOM);
    });
}

init();
