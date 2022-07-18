function init(data) {
    RecipesFactory.createRecipeCard(data);
    createFilterIngredients(data);
    createFilterAppliance(data);
    createFilterUstensils(data);
    if (data.length === 0){
        document.getElementById("recipes").innerHTML = 
        `<div class="result">Aucune recette n'a été trouvée selon vos critères de recherche.</div>`;
    }
}

init(recipesData);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}