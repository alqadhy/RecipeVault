// API Provider
import api from "./api";

export async function filterMealsByCategory(category) {
  try {
    const res = await api.get(`/filter.php?c=${category}`);
    return res.data.meals;
  } catch (error) {
    console.log(error);
  }
}

export async function filterMealsByArea(area) {
  try {
    const res = await api.get(`/filter.php?a=${area}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
