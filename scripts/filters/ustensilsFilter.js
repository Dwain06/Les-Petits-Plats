let researchInputTermsUst = [];

function createFilterUstensils(recipes) {
    const ustensilList = document.querySelector(".filter__ustensil--list");
    ustensilList.innerHTML = "";
    let arrayUstensils = [];

    recipes.forEach((recipe) => {
        const ustensils = recipe.ustensils;
        for (let i = 0; i < ustensils.length; i++) {
            let strUstensils = capitalizeFirstLetter(ustensils[i]);
            if (!arrayUstensils.includes(strUstensils)) { //Si un ingrédient est déjà présent dans la liste, on ne l'ajoute pas
                if (!researchInputTermsUst.includes(strUstensils)) { //Si un tag est selectionné, ne pas afficher son nom dans la liste des ingredients
                    arrayUstensils.push(strUstensils);
                }
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

//Close at click outside element or on chevron
ustensilChevronUp.addEventListener("click", () => closeUstensilFilter());
document.addEventListener("click", (e) => {
    if (!ustensilFilter.contains(e.target)) closeUstensilFilter();
});

function closeUstensilFilter(){
    ustensilExpanded.classList.add('hidden');
    ustensilTitle.classList.remove('hidden');
    ustensilFilter.classList.replace("col-6", "col-2");
}

//Add tag and execute search results
ustensilList.addEventListener("click", (e) => {
    ustSearch.value = "";
    addUstTag(e.target.firstChild.data);
    researchInputTermsUst.push(e.target.firstChild.data);
    search();    
});

function addUstTag(data) {
    document.querySelector("#tags").innerHTML += 
        `<button onclick="removeUstTag(this)" class="tag ustensil rounded">${data}<i class="fa-regular fa-circle-xmark"></i></button>`;
}

function removeUstTag(e) {
    researchInputTermsUst.splice(researchInputTermsUst.indexOf(e.data), 1); //Supprime le tag des termes à rechercher
    e.remove();
    search()
}