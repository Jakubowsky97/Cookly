import axios from 'axios';

const BASE_URL = 'https://api.spoonacular.com/';
const API_KEY= '3f0706d2342549d8a207992c3ab83597';

// Define the structure of a recipe
export interface Recipe {
    id: number;
    title: string;
    image: string;
    [key: string]: any; // Add more fields as needed
  }
  
  // Define the structure of the API response
  export interface RandomRecipesResponse {
    recipes: Recipe[];
  }
  
  /**
   * Fetch random recipes.
   * @param {number} number - Number of recipes to fetch.
   * @returns {Promise<RandomRecipesResponse>} - The response data containing recipes.
   */
  export const getRandomRecipes = async (number = 5): Promise<RandomRecipesResponse> => {
    try {
      const response = await axios.get<RandomRecipesResponse>(`${BASE_URL}recipes/random`, {
        params: {
          apiKey: API_KEY,
          number,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching random recipes:', error);
      throw error; // Pass the error to the calling function
    }
  };

  export const getPopularCategories