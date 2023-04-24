import { RecipeCard } from './CardRecipe.styled';
import * as React from 'react';

// if you want to try this card - you can load it in some component(like WelcomePageComponent) and put in props item with name and image way

export const CardRecipe = ({ item }) => {
  // Card use in categories Soyummy, Categories, Search
  const { thumb, title } = item;
  return (
    <RecipeCard>
      <img src={thumb} alt={title} />
      <div className="overlay">
        <h3 className="title">{title}</h3>
      </div>
    </RecipeCard>
  );
};

export default CardRecipe;
