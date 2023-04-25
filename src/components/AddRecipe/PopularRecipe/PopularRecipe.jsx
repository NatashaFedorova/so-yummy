import { useEffect, useState } from 'react';

import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';
import { PopularRecipeWrapper } from './PopularRecipe.styled';
import PopularRecipeList from './PopularRecipeList/PopularRecipeList';
import PopularRecipeListCard from './PopularRecipeListCard/PopularRecipeListCard';

import { size } from 'components/constants/deviceType/deviceType';
import { cutWidth } from '../AddRecipeForm/RecipeDescriptionFields/RecipeDescriptionFields';

const deserts = [
  {
    url: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
    title: 'Hallo !',
    description:
      'Sugar pie is a dessert in northern French and  Belgiancuisine, where it is called tarte...',
  },
  {
    url: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
    title: 'Hallo !',
    description:
      'Sugar pie is a dessert in northern French and  Belgiancuisine, where it is called tarte...',
  },
  {
    url: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
    title: 'Hallo !',
    description:
      'Sugar pie is a dessert in northern French and  Belgiancuisine, where it is called tarte...',
  },
  {
    url: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
    title: 'Hallo !',
    description:
      'Sugar pie is a dessert in northern French and  Belgiancuisine, where it is called tarte...',
  },
];

const PopularRecipe = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    if (
      document.documentElement.clientWidth >= cutWidth(size.tablet) &&
      document.documentElement.clientWidth < cutWidth(size.desktop)
    ) {
      setReceipts([(deserts[0], deserts[1])]);
    } else {
      setReceipts(deserts);
    }
  }, []);

  return (
    <PopularRecipeWrapper>
      <SecondaryTitle>Popular recipe</SecondaryTitle>
      <PopularRecipeList
        items={receipts}
        renderItem={(item, index) => (
          <PopularRecipeListCard {...item} key={index} />
        )}
      />
    </PopularRecipeWrapper>
  );
};

export default PopularRecipe;
