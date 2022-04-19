import AllRecipesPage from "./pages/AllRecipes";
import FavoriteRecipesPage from "./pages/FavoriteRecipes";
import NewRecipePage from "./pages/NewRecipe";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllRecipesPage />} />
        <Route path="/new-recipe" element={<NewRecipePage />} />
        <Route path="/favorite-recipe" element={<FavoriteRecipesPage />} />
      </Routes>
    </Layout>
  );
}
