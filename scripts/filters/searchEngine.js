// let array1 = ["Lorem", "ipsum", "dolor"]
// let array2 = ["Lorem", "ipsum", "quick", "brown", "foo"]
// let array3 = ["Jumps", "Over", "Lazy", "Lorem"]
// let array4 = [1337, 420, 666, "Lorem"]
// let data = [array1, array2, array3, array4]
// console.log(data);
// let result = data.reduce((a, b) => a.filter(c => b.includes(c)));

// console.log(result);

function search() {
    let filtredData = [];
    researchInput();
    researchIngredient();
    researchAppliance();
    researchUstensils();
    
    let arrayId = [];

    if (researchInput() !== undefined) {
        arrayId.push(researchInput());
    }

    if (researchIngredient() !== undefined) {
        arrayId.push(researchIngredient());
    }
    console.log(arrayId);

    arrayId = arrayId.reduce((a, b) => a.filter(c => b.includes(c)));

    console.log(arrayId);

    arrayId.forEach(idX => {
        recipesData.forEach(recipe => {
            if (recipe.id == idX) {
                filtredData.push(recipe);
            }
        });
    });

    console.log(filtredData);

    init(filtredData);
}

let arrayIdInput = [];
function researchInput() {
    arrayIdInput = [];
    const value = searchInput.value;
    if (value.length > 2) {
        recipesData.forEach(recipe => {
            if (reciperToString(recipe).includes(value)) {
                arrayIdInput.push(recipe.id);
            }
        });
    }
    if (arrayIdInput.length !== 0) {
        return arrayIdInput;
    }
}

function reciperToString(recipe) {
    return recipe.name.toLowerCase() + ' ' + recipe.description.toLowerCase() + ' ' + recipe.ingredients.reduce((previous, current) => previous + ' ' + current.ingredient, "");
}

let arrayIdIng = [];
function researchIngredient() {
    arrayIdIng = [];
    if (researchInputTermsIng.length !== 0){
        recipesData.forEach(recipe => {
            const ingNameList = recipe.ingredients.map(ing => capitalizeFirstLetter(ing.ingredient)); // Liste des noms d'ingredient de la recette
            const diff = researchInputTermsIng.filter(x => !ingNameList.includes(x)); // Liste de l'ensemble des tag n'étant pas dans ingNameList
            if (diff.length === 0) { //Si aucun tag n'est exclu d'une recette, l'id de la recette est ajoutée
            arrayIdIng.push(recipe.id);
            }
        });
    }
    if (arrayIdIng.length !== 0) {
        return arrayIdIng;
    }
}

let arrayIdApp = [];
function researchAppliance() {
    if (researchInputTermsApp.length !== 0){
        recipesData.forEach(recipe => {
            if (researchInputTermsApp.includes(recipe.appliance)){
                arrayIdApp.push(recipe.id);
            }
        });
    }
    return arrayIdApp;
}

let arrayIdUst = [];
function researchUstensils() {
    if (researchInputTermsUst.length !== 0){
        recipesData.forEach(recipe => {
            const ustensils = recipe.ustensils.map(ust => capitalizeFirstLetter(ust)); //On s'assure que la casse est confrome pour la recherche
            const diff = researchInputTermsUst.filter(x => !ustensils.includes(x)); //Liste de l'ensemble des tag n'étant pas dans recipe.ustensils
            if (diff.length === 0) { //Si aucun tag n'est exclu d'une recette, l'id de la recette est ajoutée
                arrayIdUst.push(recipe.id);
            }
        });
    }
    return arrayIdUst;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}