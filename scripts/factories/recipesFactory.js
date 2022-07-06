class RecipesFactory {

    constructor(data) {
        this.description = data.description;

        //DOM elements
        this.divCol = document.createElement("div");

        
        //Set attributes and class
        this.divCol.classList.add("col");

        this.divCol.innerHTML =
        `<div class="card shadow-sm">
            <img class="card-img-top" src="https://dummyimage.com/420x225/dee2e6/6c757d.jpg" alt="" />
            <div class="card-body">
              <p class="card-text">${this.description}</p>
            </div>
          </div>`

      
    }

    getRecipeCardDOM() {
        return this.divCol;
    }
   
}