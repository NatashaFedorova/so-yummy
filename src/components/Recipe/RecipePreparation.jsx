import {
  PrepWrap,
  PrepInfo,
  PrepImg,
  PrepInfoHead,
  PrepInfoText,
  PrepInfoSpan,
  PrepInfoWrap,
  PrepImgImg,
} from './RecipePreparation.styled';
import noRecipeIMG from './no-recipe-image.png';

const RecipePreparation = ({ instructions, img, title }) => {
  let ArrFromInstructions = instructions;
  if (typeof instructions === 'string') {
    ArrFromInstructions = instructions.split('. ');
  }

  return (
    <>
      <PrepWrap>
        <PrepInfo>
          <PrepInfoHead>Recipe Preparation</PrepInfoHead>
          {ArrFromInstructions.map((item, index) => (
            <PrepInfoWrap key={index}>
              <PrepInfoSpan>{index + 1}</PrepInfoSpan>
              <PrepInfoText key={item}>{item}</PrepInfoText>
            </PrepInfoWrap>
          ))}
        </PrepInfo>
        <PrepImg>
          <PrepImgImg src={img ? img : noRecipeIMG} alt={title} />
        </PrepImg>
      </PrepWrap>
    </>
  );
};

export default RecipePreparation;
