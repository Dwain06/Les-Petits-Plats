function init(data) {
    RecipesFactory.createRecipeCard(data);
    createFilterIngredients(data);
    createFilterAppliance(data);
    createFilterUstensils(data);
    if (data.length === 0){
        document.getElementById("recipes").innerHTML = 
        `<div class="result">Aucune recette ne correspond à votre critère… vous pouvez
        chercher «&nbsp;tarte aux pommes&nbsp;», «&nbsp;poisson&nbsp;», etc.</div>`;
    }
}

init(recipesData);