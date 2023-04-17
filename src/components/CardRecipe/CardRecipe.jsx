import { RecipeCard } from './CardRecipe.styled';
import * as React from 'react';

const CardRecipe = ({ item }) => {
  return (
    <RecipeCard>
      <img src={photo} alt={n} />
      <div class="overlay">
        <h3 class="title">{n}</h3>
      </div>
    </RecipeCard>
  );
};

export default CardRecipe;
