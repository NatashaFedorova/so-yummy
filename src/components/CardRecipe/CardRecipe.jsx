import { RecipeCard } from './CardRecipe.styled';
import * as React from 'react';

// if you want to try this card - you can load it in some component(like WelcomePageComponent) and put in props item with name and image way

export const CardRecipe = ({ item, text = 'New' }) => {
  // Card use in categories Soyummy, Categories, Search
  const { preview, title, createdAt } = item;
  const recipeDate = new Date(createdAt).getDate();
  const todayDate = new Date().getDate();
  const res = todayDate - recipeDate;

  return (
    <RecipeCard>
      <img src={preview} alt={title} width={350} height={350} />
      {res < 8 && (
        <div className="remark">
          <h3>{text}</h3>
        </div>
      )}
      <div className="overlay">
        <h2 className="title">{title}</h2>
      </div>
    </RecipeCard>
  );
};

export default CardRecipe;
