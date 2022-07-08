const search = document.getElementById("searchInput");
const els = document.querySelectorAll("#recipes > .col");

search.addEventListener("keyup", function(e) {
    Array.prototype.forEach.call(els, function(el) {
    console.log(el.textContent.trim().indexOf(search.value));
        if (search.value.length > 2){
            if (el.textContent.trim().indexOf(search.value) > -1) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        } else {
            el.style.display = null;
        }
    });
});