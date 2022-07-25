let arrayId = [];
let arrayIdInput = [];
let arrayIdIng = [];
let arrayIdApp = [];
let arrayIdUst = [];

function search() {
    let filtredData = [];
    
    //Si aucun terme de recherche n'est entré, on initialise le tableau de toutes les recettes
    if (researchInputTermsUst.length === 0 && researchInputTermsIng.length === 0 && researchInputTermsApp.length === 0 && searchInput.value.length <= 2) {
        init(recipesData);
    } else {
        arrayId = [];
        if (searchInput.value.length > 2) researchInput();
        if (researchInputTermsIng.length !== 0) researchIngredient();
        if (researchInputTermsApp.length !== 0) researchAppliance();
        if (researchInputTermsUst.length !== 0) researchUstensils();
        
        //On cherche les id identiques présents dans chacun des tableaux
        arrayId = arrayId.reduce((a, b) => a.filter(c => b.includes(c)));
    
        //On retourne un tableau de recttes correspondantes aux id trouvés précédemment
        arrayId.forEach(idX => {
            recipesData.forEach(recipe => {
                if (recipe.id == idX) {
                    filtredData.push(recipe);
                }
            });
        });

        init(filtredData);
    }
}

function researchInput() {
    arrayIdInput = [];
    for (let i = 0; i < recipesData.length; i++) {
        if (reciperToString(recipesData[i]).includes(searchInput.value)) {
            arrayIdInput.push(recipesData[i].id);
        }
    }
    arrayId.push(arrayIdInput);
}

function reciperToString(recipe) {
    return recipe.name.toLowerCase() + ' ' + recipe.description.toLowerCase() + ' ' + recipe.ingredients.reduce((previous, current) => previous + ' ' + current.ingredient, "");
}

function researchIngredient() {
    arrayIdIng = [];
    for (let i = 0; i < recipesData.length; i++) {
        const ingNameList = recipesData[i].ingredients.map(ing => capitalizeFirstLetter(ing.ingredient)); // Liste des noms d'ingredient de la recette
        const diff = researchInputTermsIng.filter(x => !ingNameList.includes(x)); // Liste de l'ensemble des tag n'étant pas dans ingNameList
        if (diff.length === 0) { //Si aucun tag n'est exclu d'une recette, l'id de la recette est ajoutée
        arrayIdIng.push(recipesData[i].id);
        }
    }
    arrayId.push(arrayIdIng);
}

function researchAppliance() {
    arrayIdApp = [];
    for (let i = 0; i < recipesData.length; i++) {
        if (researchInputTermsApp.includes(recipesData[i].appliance)){
            arrayIdApp.push(recipesData[i].id);
        }
    }
    arrayId.push(arrayIdApp);
}

function researchUstensils() {
    arrayIdUst = [];
    for (let i = 0; i < recipesData.length; i++) {
        const ustensils = recipesData[i].ustensils.map(ust => capitalizeFirstLetter(ust)); //On s'assure que la casse est confrome pour la recherche
        const diff = researchInputTermsUst.filter(x => !ustensils.includes(x)); //Liste de l'ensemble des tag n'étant pas dans recipe.ustensils
        if (diff.length === 0) { //Si aucun tag n'est exclu d'une recette, l'id de la recette est ajoutée
            arrayIdUst.push(recipesData[i].id);
        }
    }
    arrayId.push(arrayIdUst);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}