import RecipeItem from "./RecipeItem";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function RecipeList(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {props.recipes.map((recipe) => (
          <Grid sx={{ padding: 1 }}>
            <RecipeItem
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              title={recipe.title}
              preparationTime={recipe.preparationTime}
              ingredients={recipe.ingredients}
              plan={recipe.plan}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
