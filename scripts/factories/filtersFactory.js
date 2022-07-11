function createFilterIngredients(recipes) {
    const ingredientList = document.querySelector(".filter__ingredient--list");
    const li = document.createElement("li");
    let arrayIngredients = [];


    recipes.forEach((recipe) => {
        const ingredients = recipe.ingredients;

        for (let i = 0; i < ingredients.length; i++) {
            arrayIngredients.push(ingredients[i].ingredient);
        }
    });

    //Delete duplicate elements
    arrayIngredients = [...new Set(arrayIngredients)];

    arrayIngredients.map((ingredient) => {
        ingredientList.innerHTML += 
        `<li class="">${ingredient}</li>`
        }
    );
}

const ingredientFilter = document.querySelector(".filter__ingredient");
const ingredientTitle = document.querySelector(".filter__ingredient--title");
const ingredientExpanded = document.querySelector(".filter__ingredient--expanded");
const ingredientChevronUp = document.querySelector(".fa-solid.fa-chevron-up");

ingredientTitle.addEventListener("click", () => {
    ingredientExpanded.classList.remove('hidden');
    ingredientTitle.classList.add('hidden');
    ingredientFilter.classList.replace("col-2", "col-6");
    }
);

ingredientChevronUp.addEventListener("click", () => closeFilter());

//Close at click outside element
document.addEventListener("click", (e) => {
    if (!ingredientFilter.contains(e.target)) closeFilter();
});

function closeFilter(){
    ingredientExpanded.classList.add('hidden');
    ingredientTitle.classList.remove('hidden');
    ingredientFilter.classList.replace("col-6", "col-2");
}