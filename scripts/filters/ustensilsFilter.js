let researchInputTermsUst = [];

function createFilterUstensils(recipes) {
    const ustensilList = document.querySelector(".filter__ustensil--list");
    ustensilList.innerHTML = "";
    let arrayUstensils = [];


    recipes.forEach((recipe) => {
        for (let i = 0; i < recipe.ustensils.length; i++) {
            let strUstensils = capitalizeFirstLetter(recipe.ustensils[i]);
            if (!arrayUstensils.includes(strUstensils)) {
                arrayUstensils.push(strUstensils);
            }
        }
    });

    arrayUstensils.map((ustensil) => {
        ustensilList.innerHTML += 
        `<li>${ustensil}</li>`
        }
    );
}

const ustensilFilter = document.querySelector(".filter__ustensil");
const ustensilTitle = document.querySelector(".filter__ustensil--title");
const ustensilList = document.querySelector(".filter__ustensil--list");
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

ustensilList.addEventListener("click", (e) => {
    addUstensilTag(e.target.firstChild.data);
    }
);

function addUstensilTag(data) {
    document.querySelector("#tags").innerHTML += 
        `<button class="tag ustensil rounded">${data}<i class="fa-regular fa-circle-xmark"></i></button>`;
}