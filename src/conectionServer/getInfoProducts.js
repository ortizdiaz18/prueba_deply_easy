let data = [];

export default function getInfoProducts() {
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=8a1d871527df40a0bed857556ce13dde&addRecipeInformation=true`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
getInfoProducts();
console.log("data", data);
