import { useRef } from 'react';

import RecipeDescriptionField from './RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparationFields/RecipePreparationFields';
import { AddRecipeFormComponent } from './AddRecipeForm.styled';

const AddRecipeForm = () => {
  const formElem = useRef(null);

  const submitHandler = async event => {
    event.preventDefault();

    let response = await fetch('somewhere', {
      method: 'POST',
      body: new FormData(formElem),
    });

    let result = await response.json();

    console.log(await result);
  };

  return (
    <AddRecipeFormComponent onSubmit={submitHandler} ref={formElem}>
      <RecipeDescriptionField />
      <RecipeIngredientsFields />
      <RecipePreparationFields />
    </AddRecipeFormComponent>
  );
};

export default AddRecipeForm;
