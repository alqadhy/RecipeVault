// API Provider
import api from "./api";

export async function searchMealsByName(name) {
  try {
    const res = await api.get(`/search.php?s=${name}`);
    return res.data.meals;
  } catch (error) {
    console.log(error);
  }
}
