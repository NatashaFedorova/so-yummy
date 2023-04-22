import {
  CardWrapper,
  PictureWrapper,
  PopularRecipeCardContentWrapper,
  PopularRecipeCardTitle,
  PopularRecipeCardDescr,
} from './PopularRecipeListCard.styled';

const PopularRecipeListCard = ({ url, title, description }) => {
  return (
    <CardWrapper>
      <PictureWrapper>
        <img src={url} alt={title} />
      </PictureWrapper>
      <PopularRecipeCardContentWrapper>
        <PopularRecipeCardTitle>{title}</PopularRecipeCardTitle>
        <PopularRecipeCardDescr>{description}</PopularRecipeCardDescr>
      </PopularRecipeCardContentWrapper>
    </CardWrapper>
  );
};

export default PopularRecipeListCard;
