import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteRecipe) => {},
  removeFavorite: (recipeId) => {},
  isFavorite: (recipeId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteRecipe) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteRecipe);
    });
  }

  function removeFavoriteHandler(recipeId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((recipe) => recipe.id !== recipeId);
    });
  }

  function isFavoriteHandler(recipeId) {
    return userFavorites.some((recipe) => recipe.id === recipeId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
