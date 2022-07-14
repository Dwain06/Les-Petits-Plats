function createFilterIngredients(recipes) {
    const ingredientList = document.querySelector(".filter__ingredient--list");
    let arrayIngredients = [];


    recipes.forEach((recipe) => {
        const ingredients = recipe.ingredients;

        for (let i = 0; i < ingredients.length; i++) {
            let strIngredient = capitalizeFirstLetter(ingredients[i].ingredient);
            if (!arrayIngredients.includes(strIngredient)) {
                arrayIngredients.push(strIngredient);
            }
        }
    });

    arrayIngredients.map((ingredient) => {
        ingredientList.innerHTML += 
        `<li>${ingredient}</li>`
        }
    );
}

const ingredientFilter = document.querySelector(".filter__ingredient");
const ingredientTitle = document.querySelector(".filter__ingredient--title");
const ingredientList = document.querySelector(".filter__ingredient--list");
const ingredientExpanded = document.querySelector(".filter__ingredient--expanded");
const ingredientChevronUp = document.querySelector(".filter__ingredient--expanded .fa-solid.fa-chevron-up");

ingredientTitle.addEventListener("click", () => {
    ingredientExpanded.classList.remove('hidden');
    ingredientTitle.classList.add('hidden');
    ingredientFilter.classList.replace("col-2", "col-6");
    }
);

ingredientChevronUp.addEventListener("click", () => closeIngredientFilter());

//Close at click outside element
document.addEventListener("click", (e) => {
    if (!ingredientFilter.contains(e.target)) closeIngredientFilter();
});

function closeIngredientFilter(){
    ingredientExpanded.classList.add('hidden');
    ingredientTitle.classList.remove('hidden');
    ingredientFilter.classList.replace("col-6", "col-2");
}

ingredientList.addEventListener("click", (e) => {
    addIngredientTag(e.target.firstChild.data);
    }
);

function addIngredientTag(data) {
    document.querySelector("#tags").innerHTML += 
        `<button class="tag ingredient rounded">${data}<i class="fa-solid fa-circle-xmark"></i></button>`;
}

const tags = document.querySelector("#tags");
tags.addEventListener("click", (e) => {
    if (e.target.id !== "tags"){
        console.log(e.target.firstChild.data);
        e.target.remove();
    }    
});