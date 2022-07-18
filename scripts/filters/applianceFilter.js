let researchInputTermsIApp = [];

function createFilterAppliance(recipes) {
    const applianceList = document.querySelector(".filter__appliance--list");
    applianceList.innerHTML = "";
    let arrayAppliance = [];


    recipes.forEach((recipe) => {
        for (let i = 0; i < recipe.appliance.length; i++) {
            let strAppliance = capitalizeFirstLetter(recipe.appliance);
            if (!arrayAppliance.includes(strAppliance)) {
                arrayAppliance.push(strAppliance);
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

applianceList.addEventListener("click", (e) => {
    addApplianceTag(e.target.firstChild.data);
    researchInputTermsIApp.push(e.target.firstChild.data);
    search();
});

function addApplianceTag(data) {
    document.querySelector("#tags").innerHTML += 
        `<button onclick="removeAppTag(this)" class="tag appliance rounded">${data}<i class="fa-regular fa-circle-xmark"></i></button>`;
}
function removeAppTag(e) {
    researchInputTermsIApp.splice(researchInputTermsIApp.indexOf(e.data), 1);
    console.warn(researchInputTermsIApp)
    e.remove();
    search()
}