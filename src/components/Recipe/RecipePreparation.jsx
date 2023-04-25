import {
  PrepWrap,
  PrepInfo,
  PrepImg,
  PrepInfoHead,
  PrepInfoText,
  PrepInfoSpan,
  PrepInfoWrap,
  PrepImgImg,
} from './Recipe.styled';

const RecipePreparation = ({ instructions, img, title }) => {
  const ArrFromInstructions = instructions.split('. ');

  return (
    <PrepWrap>
      <PrepInfo>
        <PrepInfoHead>RecipePreparation</PrepInfoHead>
        {ArrFromInstructions.map((item, index) => (
          <PrepInfoWrap key={index}>
            <PrepInfoSpan>{index + 1}</PrepInfoSpan>
            <PrepInfoText key={item}>{item}</PrepInfoText>
          </PrepInfoWrap>
        ))}
      </PrepInfo>
      <PrepImg>
        <PrepImgImg src={img} alt={title} />
      </PrepImg>
    </PrepWrap>
  );
};

export default RecipePreparation;

//<PrepInfoText><PrepInfoSpan>2</PrepInfoSpan> Heat the flat grill plate over a low heat, on top of 2 rings/flames </PrepInfoText>
