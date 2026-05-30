// API Provider
import api from "./api";

export async function getMealById(id) {
  try {
    const res = await api.get(`/lookup.php?i=${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRandomMeal() {
  try {
    const res = await api.get("/random.php");
    return res.data.meals[0];
  } catch (error) {
    console.log(error);
  }
}

export function getMultipleRandomMeals(count) {
  try {
    const promises = Array.from({ length: count }, () => getRandomMeal());
    return Promise.all(promises);
  } catch (error) {
    console.log(error);
  }
}

export async function getAllCategories() {
  try {
    const res = await api.get("/categories.php");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllAreas() {
  try {
    const res = await api.get("/list.php?a=list");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export function getIngredients(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient,
        measure: measure || "",
      });
    }
  }

  return ingredients;
}
