import { useMediaQuery } from 'react-responsive';

import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';
import {
  ErrorHeading,
  ErrorWrapper,
  PopularRecipeWrapper,
} from './PopularRecipe.styled';
import PopularRecipeList from './PopularRecipeList/PopularRecipeList';
import PopularRecipeListCard from './PopularRecipeListCard/PopularRecipeListCard';

import { size } from 'components/constants/deviceType/deviceType';
import { cutWidth } from '../AddRecipeForm/RecipeDescriptionFields/RecipeDescriptionFields';
import { useSelector } from 'react-redux';
import {
  selectPopularReceipts,
  selectPopularReceiptsError,
} from 'redux/recipes/selectors/addRecipeSelectors';

const PopularRecipe = () => {
  const receipts = useSelector(selectPopularReceipts);
  const error = useSelector(selectPopularReceiptsError);
  let cardsOnScreen = 4;

  const mobileScreen = useMediaQuery({
    minWidth: cutWidth(size.mobile),
    maxWidth: cutWidth(size.mobile) - 1,
  });

  const desktopScreen = useMediaQuery({ minWidth: cutWidth(size.desktop) });

  const tabletScreen = useMediaQuery({
    minWidth: cutWidth(size.tablet),
    maxWidth: cutWidth(size.desktop) - 1,
  });

  if (desktopScreen) {
    cardsOnScreen = 4;
  } else if (tabletScreen) {
    cardsOnScreen = 2;
  } else if (mobileScreen) {
    cardsOnScreen = 4;
  }

  return (
    <PopularRecipeWrapper>
      {receipts.lenght !== 0 && (
        <>
          <SecondaryTitle>Popular recipe</SecondaryTitle>
          <PopularRecipeList
            items={receipts.slice(0, cardsOnScreen)}
            renderItem={(item, index) => (
              <PopularRecipeListCard {...item} key={index} />
            )}
          />
        </>
      )}
      {error && (
        <ErrorWrapper>
          <ErrorHeading>{`Sorry, we have no popular receipts for now :(`}</ErrorHeading>
        </ErrorWrapper>
      )}
    </PopularRecipeWrapper>
  );
};

export default PopularRecipe;
