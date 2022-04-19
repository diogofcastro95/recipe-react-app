import { useContext } from "react";
import RecipeList from "../components/recipes/RecipeList";
import FavoritesContext from "../store/favorites-context";

export default function FavoriteRecipesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites yet!</p>;
  } else content = <RecipeList recipes={favoritesCtx.favorites} />;
  return (
    <section>
      <h1>My Favorite Recipes</h1>
      {content}
    </section>
  );
}
