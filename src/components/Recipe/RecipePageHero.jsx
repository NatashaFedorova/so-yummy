
import { HeroBtn, HeroHead, HeroTitle, HeroInfo, HeroP } from './Recipe.styled';

const RecipePageHero = ({ title, time, description }) => {
    return (
        <HeroHead>
            <HeroTitle>{title}</HeroTitle>
            <HeroInfo>{description}</HeroInfo>
            <HeroBtn>Add to favorite recipes</HeroBtn>
            <HeroP>{time} min</HeroP>
        </HeroHead>
    );
};

export default RecipePageHero;

