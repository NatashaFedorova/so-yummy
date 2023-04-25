import {
  CardWrapper,
  PictureWrapper,
  PopularRecipeCardContentWrapper,
  PopularRecipeCardTitle,
  PopularRecipeCardDescr,
  LinkWrapper,
} from './PopularRecipeListCard.styled';

const PopularRecipeListCard = ({ preview, title, description, _id }) => {
  return (
    <CardWrapper>
      <LinkWrapper to={`/recipe/${_id}`}>
        <PictureWrapper>
          <img src={preview} alt={title} />
        </PictureWrapper>
        <PopularRecipeCardContentWrapper>
          <PopularRecipeCardTitle>{title}</PopularRecipeCardTitle>
          <PopularRecipeCardDescr>{description}</PopularRecipeCardDescr>
        </PopularRecipeCardContentWrapper>
      </LinkWrapper>
    </CardWrapper>
  );
};

export default PopularRecipeListCard;
