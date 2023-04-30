import { useEffect, useState } from 'react';
import { Text, AccentText } from './MotivationCardText.styled';
import textForMotivationCard from 'components/constants/textForMotivationCard';

const messagFormation = ({ type, value }) => {
  const {
    firstRecipesOfFavorite,
    recipesOfFavorite,
    days,
    firstRecipesOfMyRecipes,
    myRecipes,
  } = textForMotivationCard;

  if (type === 'numberOfVisits') {
    return `${days.firstParth} ${value} ${days.secondParth}`;
  } else if (type === 'numberOfFavorites' && value === 1) {
    return `${firstRecipesOfFavorite}`;
  } else if (type === 'numberOfFavorites' && value > 1) {
    return `${recipesOfFavorite.firstParth} ${value} ${recipesOfFavorite.secondParth}`;
  } else if (type === 'numberOfOwnRecipes' && value === 1) {
    return `${firstRecipesOfMyRecipes}`;
  } else if (type === 'numberOfOwnRecipes' && value > 1) {
    return `${myRecipes.firstParth} ${value} ${myRecipes.secondParth}`;
  }
};

const MotivationCardText = ({ card }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(messagFormation(card));
  }, [card]);

  return (
    <Text>
      <AccentText>WOW! </AccentText>
      {text}
    </Text>
  );
};
export default MotivationCardText;
