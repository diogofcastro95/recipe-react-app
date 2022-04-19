import { Button, Card } from "@mui/material";
import { TextField } from "@mui/material";

import { useRef } from "react";

export default function NewRecipeForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const preparationTimeInputRef = useRef();
  const ingredientsInputRef = useRef();
  const planInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const recipeData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      preparationTime: preparationTimeInputRef.current.value,
      ingredients: ingredientsInputRef.current.value,
      plan: planInputRef.current.value,
    };
    props.onAddRecipe(recipeData);
  }

  return (
    <Card
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 900,
        padding: 1,
      }}
    >
      <form onSubmit={submitHandler}>
        <TextField
          type="text"
          htmlFor="title"
          label="title"
          id="title"
          required
          fullWidth
          sx={{ marginTop: 1, marginBottom: 1 }}
          inputRef={titleInputRef}
        />
        <TextField
          type="url"
          htmlFor="image"
          label="image"
          id="image"
          required
          fullWidth
          sx={{ marginTop: 1, marginBottom: 1 }}
          inputRef={imageInputRef}
        />

        <TextField
          type="text"
          htmlFor="preparationTime"
          label="preparation time"
          id="preparationTime"
          required
          fullWidth
          sx={{ marginTop: 1, marginBottom: 1 }}
          inputRef={preparationTimeInputRef}
        />

        <TextField
          type="text"
          htmlFor="ingredients"
          label="ingredients"
          id="ingredients"
          required
          fullWidth
          multiline
          rows="3"
          sx={{ marginTop: 1, marginBottom: 1 }}
          inputRef={ingredientsInputRef}
        />
        <TextField
          type="text"
          htmlFor="plan"
          label="plan"
          id="plan"
          required
          fullWidth
          multiline
          rows="6"
          sx={{ marginTop: 1, marginBottom: 1 }}
          inputRef={planInputRef}
        />

        <div>
          <Button fullWidth type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
}
