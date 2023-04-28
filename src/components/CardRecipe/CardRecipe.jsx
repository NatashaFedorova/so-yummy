import { RecipeCard } from './CardRecipe.styled';
import * as React from 'react';

// if you want to try this card - you can load it in some component(like WelcomePageComponent) and put in props item with name and image way

export const CardRecipe = ({ item }) => {
  // Card use in categories Soyummy, Categories, Search
  const { preview, title } = item;
  return (
    <RecipeCard>
      <img src={preview} alt={title} />
      <div className="overlay">
        <h2 className="title">{title}</h2>
      </div>
    </RecipeCard>
  );
};

export default CardRecipe;
