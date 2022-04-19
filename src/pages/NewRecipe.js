import NewRecipeForm from "./NewRecipeForm";
import { useNavigate } from "react-router-dom";
export default function NewRecipePage() {
  const navigate = useNavigate();
  function addRecipeHandler(recipeData) {
    fetch("https://trip-app-926b6-default-rtdb.firebaseio.com/recipes.json", {
      method: "POST",
      body: JSON.stringify(recipeData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/"));
  }
  return (
    <section>
      <h1>Add New Recipe</h1>
      <NewRecipeForm onAddRecipe={addRecipeHandler} />
    </section>
  );
}
