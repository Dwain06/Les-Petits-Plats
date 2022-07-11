function createFilterUstensils(recipes) {
    const ustensilList = document.querySelector(".filter__ustensil--list");
    let arrayUstensils = [];


    recipes.forEach((recipe) => {
        const ustensils = recipe.ustensils;

        for (let i = 0; i < ustensils.length; i++) {
            arrayUstensils.push(ustensils[i]);
        }
    });

    //Delete duplicate elements
    arrayUstensils = [...new Set(arrayUstensils)];

    arrayUstensils.map((ustensil) => {
        ustensilList.innerHTML += 
        `<li>${ustensil}</li>`
        }
    );
}

const ustensilFilter = document.querySelector(".filter__ustensil");
const ustensilTitle = document.querySelector(".filter__ustensil--title");
const ustensilExpanded = document.querySelector(".filter__ustensil--expanded");
const ustensilChevronUp = document.querySelector(".filter__ustensil--expanded .fa-solid.fa-chevron-up");

ustensilTitle.addEventListener("click", () => {
    ustensilExpanded.classList.remove('hidden');
    ustensilTitle.classList.add('hidden');
    ustensilFilter.classList.replace("col-2", "col-6");
    }
);

ustensilChevronUp.addEventListener("click", () => closeUstensilFilter());

//Close at click outside element
document.addEventListener("click", (e) => {
    if (!ustensilFilter.contains(e.target)) closeUstensilFilter();
});

function closeUstensilFilter(){
    ustensilExpanded.classList.add('hidden');
    ustensilTitle.classList.remove('hidden');
    ustensilFilter.classList.replace("col-6", "col-2");
}