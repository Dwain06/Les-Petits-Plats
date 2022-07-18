let researchInputTermsApp = [];

function createFilterAppliance(recipes) {
    const applianceList = document.querySelector(".filter__appliance--list");
    applianceList.innerHTML = "";
    let arrayAppliance = [];

    recipes.forEach((recipe) => {
        const appliance = recipe.appliance;
        for (let i = 0; i < appliance.length; i++) {
            let strAppliance = capitalizeFirstLetter(appliance);
            if (!arrayAppliance.includes(strAppliance)) { //Si un ingrédient est déjà présent dans la liste, on ne l'ajoute pas
                if (!researchInputTermsApp.includes(strAppliance)) { //Si un tag est selectionné, ne pas afficher son nom dans la liste des ingredients
                    arrayAppliance.push(strAppliance);
                }
            }
        }
    });

    arrayAppliance.map((appliance) => {
        applianceList.innerHTML += 
        `<li>${appliance}</li>`
        }
    );
}

const applianceFilter = document.querySelector(".filter__appliance");
const applianceTitle = document.querySelector(".filter__appliance--title");
const applianceList = document.querySelector(".filter__appliance--list");
const applianceExpanded = document.querySelector(".filter__appliance--expanded");
const applianceChevronUp = document.querySelector(".filter__appliance--expanded .fa-solid.fa-chevron-up");

//Expand Tag list at click
applianceTitle.addEventListener("click", () => {
    applianceExpanded.classList.remove('hidden');
    applianceTitle.classList.add('hidden');
    applianceFilter.classList.replace("col-2", "col-6");
    }
);

//Close at click outside element or on chevron
applianceChevronUp.addEventListener("click", () => closeApplianceFilter());
document.addEventListener("click", (e) => {
    if (!applianceFilter.contains(e.target)) closeApplianceFilter();
});

function closeApplianceFilter(){
    applianceExpanded.classList.add('hidden');
    applianceTitle.classList.remove('hidden');
    applianceFilter.classList.replace("col-6", "col-2");
}

//Add tag and execute search results
applianceList.addEventListener("click", (e) => {
    addApplianceTag(e.target.firstChild.data);
    researchInputTermsApp.push(e.target.firstChild.data);
    search();
});

function addApplianceTag(data) {
    document.querySelector("#tags").innerHTML += 
        `<button onclick="removeAppTag(this)" class="tag appliance rounded">${data}<i class="fa-regular fa-circle-xmark"></i></button>`;
}

function removeAppTag(e) {
    researchInputTermsApp.splice(researchInputTermsApp.indexOf(e.data), 1); //Supprime le tag des termes à rechercher
    e.remove();
    search()
}