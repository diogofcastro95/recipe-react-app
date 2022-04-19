import { useEffect, useState } from "react";
import RecipeList from "../components/recipes/RecipeList";

export default function AllRecipesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipes, setLoadedRecipes] = useState([]);
  useEffect(() => {
    fetch("https://trip-app-926b6-default-rtdb.firebaseio.com/recipes.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const recipes = [];
        for (const key in data) {
          const recipe = {
            id: key,
            ...data[key],
          };
          recipes.push(recipe);
        }
        setIsLoading(false);
        setLoadedRecipes(recipes);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Recipes</h1>
      <RecipeList recipes={loadedRecipes} />
    </section>
  );
}
