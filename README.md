# Projet 7 OpenClassrooms : algorithme de recherche Les Petits Plats
#### _Conception site dynamique et accessible_

 [![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-grammas-recipe.svg)](https://forthebadge.com)

## Objectif
Développer une interface de recherche de recettes de cuisine selon 2 algorithmes et conserver le plus rapide selon js.bench.

## Règles de gestion
1. La recherche doit pouvoir se faire via le champ principal ou via les tags (ingrédients, ustensiles ou appareil)
2. La recherche principale se lance à partir de 3 caractères entrés par l’utilisateur dans la barre de recherche
3. La recherche s’actualise pour chaque nouveau caractère entré
4. La recherche principale affiche les premiers résultats le plus rapidement possible
5. Les champs ingrédients, ustensiles et appareil de la recherche avancée proposent seulement les éléments restant dans les recettes présentes sur la page
6. Les retours de recherche doivent être une intersection des résultats. Si l’on ajoute les tags “coco” et “chocolat” dans les ingrédients, on doit récupérer les recettes qui ont à la fois de la coco et du chocolat.
7. Comme pour le reste du site, le code HTML et CSS pour l’interface (avec ou sans Bootstrap) devra passer avec succès le validateur W3C.
8. Aucune librairie ne sera utilisée pour le JavaScript du moteur de recherche

## Fonctionnalités de l'algorithme :
##### Scénario nominal :
1. Le cas d’utilisation commence lorsque l’utilisateur entre au moins 3 caractères dans la barre de recherche principale.
2. Le système recherche des recettes correspondant à l’entrée utilisateur dans : le titre de la recette, la liste des ingrédients de la recette, la description de la recette.
3. L’interface est actualisée avec les résultats de recherche
4. Les champs de recherche avancée sont actualisés avec les informations ingrédients, ustensiles, appareil des différentes recettes restantes
5. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil.
6. Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le champ disparaissent. Par exemple, si l’utilisateur entre “coco” dans la liste d’ingrédients, seuls vont rester “noix de coco” et “lait de coco”.
7. L’utilisateur choisit un mot clé dans le champ
8. Le mot clé apparaît sous forme de tag sous la recherche principale
9. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée
10. L’utilisateur sélectionne une recette

##### Scénario alternatif A1 : aucune recette correspondante à la recherche
_L'enchaînement A1 commence au point 3 du scénario nominal_
1. L’interface affiche « Aucune recette ne correspond à votre critère… vous pouvez
chercher « tarte aux pommes », « poisson », etc.

##### Scénario alternatif A2 : l’utilisateur commence sa recherche par un tag
_L'enchaînement A2 commence au point 1 du scénario nominal et reprend au point 9 du scénario nominal._
1. L’utilisateur commence la recherche par un tag.
2. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée (9 du cas principal)

##### Scénario alternatif A3 : l’utilisateur ajoute d’autres tags pour la recherche avancée
_L'enchaînement A3 commence au point 9 du scénario nominal. Cet enchaînement peut se répéter autant que nécessaire_
1. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil.
2. Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le champ disparaissent
3. L’utilisateur choisit un mot clé dans le champ
4. Le mot clé apparaît sous forme de tag sous la recherche principale
5. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée