import { PrepWrap, PrepInfo, PrepImg, PrepInfoHead, PrepInfoText, PrepInfoSpan } from './Recipe.styled';

const RecipePreparation = () => {
    return (
        <PrepWrap>
            <PrepInfo>
                <PrepInfoHead>RecipePreparation</PrepInfoHead>
                <PrepInfoText><PrepInfoSpan>1</PrepInfoSpan> Heat the flat grill plate over a low heat, on top of 2 rings/flames </PrepInfoText>
                <PrepInfoText><PrepInfoSpan>2</PrepInfoSpan> Heat the flat grill plate over a low heat, on top of 2 rings/flames </PrepInfoText>
            </PrepInfo>
            <PrepImg>
                <img src="../images/recipeById/image11.png" alt="test-img" />
            </PrepImg>
        </PrepWrap>
    );
};

export default RecipePreparation;