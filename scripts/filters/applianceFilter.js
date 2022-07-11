function createFilterAppliance(recipes) {
    const applianceList = document.querySelector(".filter__appliance--list");
    let arrayAppliance = [];


    recipes.forEach((recipe) => {

        for (let i = 0; i < recipe.appliance.length; i++) {
            arrayAppliance.push(recipe.appliance);
        }
    });

    //Delete duplicate elements
    arrayAppliance = [...new Set(arrayAppliance)];

    arrayAppliance.map((appliance) => {
        applianceList.innerHTML += 
        `<li>${appliance}</li>`
        }
    );
}

const applianceFilter = document.querySelector(".filter__appliance");
const applianceTitle = document.querySelector(".filter__appliance--title");
const applianceExpanded = document.querySelector(".filter__appliance--expanded");
const applianceChevronUp = document.querySelector(".filter__appliance--expanded .fa-solid.fa-chevron-up");

applianceTitle.addEventListener("click", () => {
    applianceExpanded.classList.remove('hidden');
    applianceTitle.classList.add('hidden');
    applianceFilter.classList.replace("col-2", "col-6");
    }
);

applianceChevronUp.addEventListener("click", () => closeFilter());

//Close at click outside element
document.addEventListener("click", (e) => {
    if (!applianceFilter.contains(e.target)) closeFilter();
});

function closeFilter(){
    applianceExpanded.classList.add('hidden');
    applianceTitle.classList.remove('hidden');
    applianceFilter.classList.replace("col-6", "col-2");
}