const search = document.getElementById("searchInput");
const recipeCards = document.querySelectorAll("#recipes > .col");
search.addEventListener("keyup", function(e) {
    Array.prototype.forEach.call(recipeCards, function(recipeCard) {
    console.log(recipeCard.textContent.trim().indexOf(search.value));
        if (search.value.length > 2){
            if (recipeCard.textContent.trim().indexOf(search.value) > -1) {
                recipeCard.style.display = 'block';
            } else {
                recipeCard.style.display = 'none';
            }
        } else {
            recipeCard.style.display = null;
        }
    });
});