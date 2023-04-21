
import { HeroBtn, HeroHead, HeroTitle, HeroInfo, HeroP } from './Recipe.styled';

const RecipePageHero = ({ title, time, description, onBtnClick, btnState }) => {
    //console.log(btnState)
    return (
        <HeroHead>
            <HeroTitle>{title}</HeroTitle>
            <HeroInfo>{description}</HeroInfo>
            {btnState ? (<HeroTitle>Resipe Is in Favorite list</HeroTitle>) : (<HeroBtn onClick={onBtnClick}>Add to favorite recipes</HeroBtn>)
            }
            <HeroP>{time} min</HeroP>
        </HeroHead>
    );
};

export default RecipePageHero;

