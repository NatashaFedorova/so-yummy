
import { HeroBtn, HeroHead, HeroTitle, HeroInfo, HeroP } from './Recipe.styled';

const RecipePageHero = () => {
    return (
        <HeroHead>
            <HeroTitle>English Breakfast</HeroTitle>
            <HeroInfo>A hearty breakfast meal consisting of eggs, bacon, sausage, baked beans, grilled tomato, and toast. It is a popular breakfast in the United Kingdom.</HeroInfo>
            <HeroBtn>Add to favorite recipes</HeroBtn>
            <HeroP>40 min</HeroP>
        </HeroHead>
    );
};

export default RecipePageHero;

