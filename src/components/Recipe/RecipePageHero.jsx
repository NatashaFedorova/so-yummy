import {
  HeroBtn,
  HeroHead,
  HeroTitle,
  HeroInfo,
  HeroP,
} from './RecipePageHero.styled';


const RecipePageHero = ({
  title,
  time,
  description,
  onBtnClickAdd,
  onBtnClickRemove,
  btnState,
}) => {
  return (
    <>
      <HeroHead>
        <HeroTitle>{title}</HeroTitle>
        <HeroInfo>{description}</HeroInfo>
        {btnState ? (
          <HeroBtn onClick={onBtnClickRemove}>
            Remove from favorite recipes
          </HeroBtn>
        ) : (
          <HeroBtn onClick={onBtnClickAdd}>Add to favorite recipes</HeroBtn>
        )}
        <HeroP>{time} min</HeroP>
      </HeroHead>
    </>
  );
};

export default RecipePageHero;
