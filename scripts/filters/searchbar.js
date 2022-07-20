//Principal serachbar input
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {
    search();
});

//Searchbar of ingredient tags
const ingSearch = document.getElementById("filter__ingredient--input");

ingSearch.addEventListener("keyup", function() {
    const ingTags = document.querySelectorAll(".filter__ingredient--list li");
    ingTags.forEach((tag) => {
        if (tag.textContent.toLowerCase().indexOf(ingSearch.value.toLowerCase()) > -1) {
            tag.classList.remove("hidden");
        } else {
            tag.classList.add("hidden");
        }
    });
});
//Searchbar of appliance tags
const appSearch = document.getElementById("filter__appliance--input");

appSearch.addEventListener("keyup", function() {
    const appTags = document.querySelectorAll(".filter__appliance--list li");
    appTags.forEach((tag) => {
        if (tag.textContent.toLowerCase().indexOf(appSearch.value.toLowerCase()) > -1) {
            tag.classList.remove("hidden");
        } else {
            tag.classList.add("hidden");
        }
    });
});
//Searchbar of ustensil tags
const ustSearch = document.getElementById("filter__ustensil--input");

ustSearch.addEventListener("keyup", function() {
    const ustTags = document.querySelectorAll(".filter__ustensil--list li");
    ustTags.forEach((tag) => {
        if (tag.textContent.toLowerCase().indexOf(ustSearch.value.toLowerCase()) > -1) {
            tag.classList.remove("hidden");
        } else {
            tag.classList.add("hidden");
        }
    });
});