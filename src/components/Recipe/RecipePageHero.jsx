import {
  HeroBtn,
  HeroHead,
  HeroTitle,
  HeroInfo,
  HeroP,
} from './RecipePageHero.styled';

import SubLoadingHero from './SubLoaderHero';

const RecipePageHero = ({
  title,
  time,
  description,
  onBtnClickAdd,
  onBtnClickRemove,
  btnState,
  isloading,
}) => {
  return (
    <>
      <HeroHead>
        <HeroTitle>{title}</HeroTitle>
        <HeroInfo>{description}</HeroInfo>
        {isloading ? (
          <SubLoadingHero />
        ) : (
          <>
            {btnState ? (
              <HeroBtn onClick={onBtnClickRemove}>
                Remove from favorite recipes
              </HeroBtn>
            ) : (
              <HeroBtn onClick={onBtnClickAdd}>Add to favorite recipes</HeroBtn>
            )}
          </>
        )}
        <HeroP>{Number.parseInt(time)} min</HeroP>
      </HeroHead>
    </>
  );
};

export default RecipePageHero;
