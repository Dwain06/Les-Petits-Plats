class RecipesFactory {

    constructor(data) {
        this.description = data.description;
        this.name = data.name;
        this.time = data.time;
        this.ingredients = data.ingredients;
    }

    

    getIngredients() {
      for (let i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].quantity == undefined){
          this.divIngredients.innerHTML +=
          `<p><span class="fw-bold">${this.ingredients[i].ingredient}</p>`;
        } else if (this.ingredients[i].unit == undefined) {
          this.divIngredients.innerHTML +=
          `<p><span class="fw-bold">${this.ingredients[i].ingredient} :</span> ${this.ingredients[i].quantity}</p>`;
        } else {
          this.divIngredients.innerHTML +=
          `<p><span class="fw-bold">${this.ingredients[i].ingredient} :</span> ${this.ingredients[i].quantity} ${this.ingredients[i].unit}</p>`;
        }
      }
    }

    getRecipeCardDOM() {
      //DOM elements of recipe card
      const divCol = document.createElement("div");
      const divCard = document.createElement("div");
      const img = document.createElement("img");
      const divCardBody = document.createElement("div");
      const divCardTitle = document.createElement("div");
      const divRow = document.createElement("div");
      this.divIngredients = document.createElement("div");
      const divCardText = document.createElement("p");
      
      //Set attributes and class for the CSS
      divCol.classList.add("col");
      divCard.classList.add("card", "shadow-sm");
      img.classList.add("card-img-top");
      img.setAttribute("src", "https://dummyimage.com/420x225/C7BEBE/6c757d.jpg");
      divCardTitle.classList.add("card-title", "d-flex", "justify-content-between", "align-items-baseline");
      divCardBody.classList.add("card-body");
      divRow.classList.add("row");
      this.divIngredients.classList.add("col", "ingredients");
      divCardText.classList.add("col", "card-text");

      //Text injected in HTML elements
      divCardBody.innerHTML = 
        `<div class="card-title d-flex justify-content-between align-items-baseline">
        <h2 class="fw-normal">${this.name}</h2>
        <p><i class="fa-regular fa-clock"></i>${this.time} min</p>
        </div>`;
      divCardText.textContent = `${this.description}`;

      //Add created elements in the DOM
      divCard.appendChild(img);
      divCard.appendChild(divCardBody);
      
      divRow.appendChild(this.divIngredients);
      divRow.appendChild(divCardText);
      divCardBody.appendChild(divRow);

      divCol.appendChild(divCard);

      return {divCol};
    }
 
    static createRecipeCard(recipes) {
      //Create section for each recipe in DOM
      const divRecipes = document.getElementById("recipes");
      recipes.forEach((recipe) => {
          const recipesFactory = new RecipesFactory(recipe);
          const recipeCardDOM = recipesFactory.getRecipeCardDOM();
          divRecipes.appendChild(recipeCardDOM.divCol);
          recipesFactory.getIngredients();
      });
  }
}