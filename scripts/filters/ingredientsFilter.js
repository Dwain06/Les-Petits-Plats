let researchInputTermsIng = [];

function createFilterIngredients(recipes) {
    const ingredientList = document.querySelector(".filter__ingredient--list");
    ingredientList.innerHTML = "";
    let arrayIngredients = [];

    recipes.forEach((recipe) => {
        const ingredients = recipe.ingredients;
        for (let i = 0; i < ingredients.length; i++) {
            let strIngredient = capitalizeFirstLetter(ingredients[i].ingredient);
            if (!arrayIngredients.includes(strIngredient)) { //Si un ingrédient est déjà présent dans la liste, on ne l'ajoute pas
                if (!researchInputTermsIng.includes(strIngredient)) { //Si un tag est selectionné, ne pas afficher son nom dans la liste des ingredients
                arrayIngredients.push(strIngredient);
                }
            }
        }
    });
    
    arrayIngredients.map((ingredient) => {
        ingredientList.innerHTML += 
        `<li>${ingredient}</li>`
    });
}

const ingredientFilter = document.querySelector(".filter__ingredient");
const ingredientTitle = document.querySelector(".filter__ingredient--title");
const ingredientList = document.querySelector(".filter__ingredient--list");
const ingredientExpanded = document.querySelector(".filter__ingredient--expanded");
const ingredientChevronUp = document.querySelector(".filter__ingredient--expanded .fa-solid.fa-chevron-up");

//Expand Tag list at click
ingredientTitle.addEventListener("click", () => {
    ingredientExpanded.classList.remove('hidden');
    ingredientTitle.classList.add('hidden');
    ingredientFilter.classList.replace("col-md-2", "col-md-6");
    }
);

//Close at click outside element or on chevron
ingredientChevronUp.addEventListener("click", () => closeIngredientFilter());
document.addEventListener("click", (e) => {
    if (!ingredientFilter.contains(e.target)) closeIngredientFilter();
});

function closeIngredientFilter(){
    ingredientExpanded.classList.add('hidden');
    ingredientTitle.classList.remove('hidden');
    ingredientFilter.classList.replace("col-md-6", "col-md-2");
}

//Add tag and execute search results
ingredientList.addEventListener("click", (e) => {
    ingSearch.value = "";
    addIngTag(e.target.firstChild.data);
    researchInputTermsIng.push(e.target.firstChild.data);
    search();
});

function addIngTag(data) {
    document.querySelector("#tags").innerHTML += 
        `<button onclick="removeIngTag(this)" class="tag ingredient rounded">${data}<i class="fa-regular fa-circle-xmark"></i></button>`;
}

function removeIngTag(e) {
    researchInputTermsIng.splice(researchInputTermsIng.indexOf(e.data), 1); //Supprime le tag des termes à rechercher
    e.remove();
    search()
}