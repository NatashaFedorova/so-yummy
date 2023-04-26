import { HeroBtn, HeroHead, HeroTitle, HeroInfo, HeroP } from './RecipePageHero.styled';

const RecipePageHero = ({ title, time, description, onBtnClick, btnState }) => {
  return (
    <>
      <HeroHead>
        <HeroTitle>{title}</HeroTitle>
        <HeroInfo>{description}</HeroInfo>
        {btnState ? (
          <HeroTitle>Resipe Is in Favorite list</HeroTitle>
        ) : (
          <HeroBtn onClick={onBtnClick}>Add to favorite recipes</HeroBtn>
        )}
        <HeroP>{time} min</HeroP>
      </HeroHead>
    </>
  );
};

export default RecipePageHero;

//<HeroP onClick={onDataChange}>{time} min</HeroP>
//  {loader && <HeroTitle>Hier vllt. wird ein Fenster</HeroTitle>}
// const onDataChange = () => {
//     let temp = '';
//     const tmp = '1234'
//     window.onkeypress = function (event) {
//         temp += event.key
//         console.log(temp)
//         if (temp === tmp) {
//             setLoader(true)
//             setTimeout(function () {
//                 setLoader(false)
//             }, 5000);
//         }

//     }
// }
