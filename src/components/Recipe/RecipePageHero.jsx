
import { HeroBtn, HeroHead, HeroTitle, HeroInfo, HeroP } from './Recipe.styled';
import { useState } from "react";
import Loading from 'components/Loading/Loading';

const RecipePageHero = ({ title, time, description, onBtnClick, btnState }) => {



    const [loader, setLoader] = useState(false);



    const onDataChange = () => {
        let temp = '';
        const tmp = '1234'
        window.onkeypress = function (event) {
            temp += event.key
            console.log(temp)
            if (temp === tmp) {
                setLoader(true)
                console.log("WORK")
                setTimeout(function () {
                    setLoader(false)
                    console.log("NOT WORK")
                }, 5000);
            }

        }
    }



    //console.log(btnState)
    return (
        <>
            {loader && <Loading />}
            <HeroHead>
                <HeroTitle>{title}</HeroTitle>
                <HeroInfo>{description}</HeroInfo>
                {btnState ? (<HeroTitle>Resipe Is in Favorite list</HeroTitle>) : (<HeroBtn onClick={onBtnClick}>Add to favorite recipes</HeroBtn>)
                }
                <HeroP onClick={onDataChange}>{time} min</HeroP>
            </HeroHead>
        </>
    );
};

export default RecipePageHero;

