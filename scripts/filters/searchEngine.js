function search() {
    researchInput(recipesData);
    researchIngredient(recipesData);
    researchAppliance(recipesData);
    researchUstensils(recipesData);
    init(filtredData);
}

function researchInput() {
    let arrayIdInput = [];
    const value = searchInput.value;
    if (value.length > 2) {
        recipesData.forEach(recipe => {
            if (reciperToString(recipe).includes(value)) {
                arrayIdInput.push(recipe.id);
            }
        });
    }
    console.log(arrayIdInput);
    return arrayIdInput;
}

function reciperToString(recipe) {
    return recipe.name.toLowerCase() + ' ' + recipe.description.toLowerCase() + ' ' + recipe.ingredients.reduce((previous, current) => previous + ' ' + current.ingredient, "");
}

function researchIngredient() {
    let arrayIdIng = [];
    recipesData.forEach(recipe => {
        const ingNameList = recipe.ingredients.map(ing => ing.ingredient); // Liste des noms d'ingredient de la recette
        const diff = researchInputTermsIng.filter(x => !ingNameList.includes(x)); // Liste de l'ensemble des tag n'étant pas dans ingNameList
        if (diff.length === 0) { //Si aucun tag n'est exclu d'une recette, l'id de la recette est ajoutée
        arrayIdIng.push(recipe.id);
        }
    });
    console.log(arrayIdIng);
    return arrayIdIng;
}

function researchAppliance() {
    let arrayIdApp = [];
    recipesData.forEach(recipe => {
        if (researchInputTermsApp.includes(recipe.appliance)){
            arrayIdApp.push(recipe.id);
        }
    });
    console.log(arrayIdApp);
    return arrayIdApp;
}

function researchUstensils() {
    let arrayIdUst = [];
    recipesData.forEach(recipe => {
        const ustensils = recipe.ustensils.map(ust => capitalizeFirstLetter(ust)); //On s'assure que la casse est confrome pour la recherche
        const diff = researchInputTermsUst.filter(x => !ustensils.includes(x)); //Liste de l'ensemble des tag n'étant pas dans recipe.ustensils
        if (diff.length === 0) { //Si aucun tag n'est exclu d'une recette, l'id de la recette est ajoutée
            arrayIdUst.push(recipe.id);
        }
    });
    console.log(arrayIdUst);
    return arrayIdUst;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}