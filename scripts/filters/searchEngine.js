function search() {
    let filtredData = researchInput(recipesData);
    filtredData = researchIngredient(filtredData);
    filtredData = researchAppliance(filtredData);
    filtredData = researchUstensils(filtredData);
    init(filtredData);
}

function researchInput(datas) {
    const value = searchInput.value;
    if (value.length <= 2) {
        return datas;
    }

    let arraySorted = datas.filter(recipe => {
        return reciperToString(recipe).includes(value)
    });
    console.log(arraySorted);

    return arraySorted;
}

function researchIngredient(datas) {
    return datas.filter(recipe => {
        const ingNameList = recipe.ingredients.map(ing => ing.ingredient); // Liste des noms d'ingredient
        const diff = researchInputTermsIng.filter(x => !ingNameList.includes(x)); // Liste de l'ensemble des tag n'étant pas dans ingNameList
        
        return diff.length === 0;
    });
}

function researchAppliance(datas) {
    if(researchInputTermsIApp.length === 0){
        return datas;
    }

    return datas.filter(recipe => {
        return researchInputTermsIApp.includes(recipe.appliance);
    });
}

function reciperToString(recipe) {
    return recipe.name.toLowerCase() + ' ' + recipe.description.toLowerCase() + ' ' + recipe.ingredients.reduce((previous, current) => previous + ' ' + current.ingredient, "");
}

function researchUstensils(datas) {
    return datas.filter(recipe => {
        const diff = researchInputTermsUst.filter(x => !recipe.ustensils.includes(x)); // Liste de l'ensemble des tag n'étant pas dans recipe.ustensils
        
        return diff.length === 0;
    });
}