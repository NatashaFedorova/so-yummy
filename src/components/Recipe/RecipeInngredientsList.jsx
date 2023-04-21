import {
    IngImg, IngListItem, IngListItemInfo,
    IngListItemInfoText, IngListItemNumber, IngListItemNumberWrap, IngListItemInput,
    IngListItemLabel, IngListItemCheckWrap
} from './Recipe.styled';

import RecipeTableHead from '../RecipeTableHead/RecipeTableHead';

const RecipeInngredientsList = ({ info }) => {

    //console.log("INGREDIENT ", info)

    return (
        <>
            <RecipeTableHead titleLeft={'Ingredients'} titleCenter={'Number'} titleRight={'Add to list'} />
            <ul>
                {info.map((item) => (
                    <IngListItem key={item._id}>
                        <IngListItemInfo >
                            <IngImg src={item.thb} alt={item.ttl} />
                            <IngListItemInfoText>{item.ttl}</IngListItemInfoText>
                        </IngListItemInfo>
                        <IngListItemNumberWrap >
                            <IngListItemNumber>{item.measure}</IngListItemNumber>
                        </IngListItemNumberWrap>
                        <IngListItemCheckWrap >
                            <IngListItemInput type="checkbox" id="vehicle4" name="vehicle4" />
                            <IngListItemLabel htmlFor="vehicle4" >  </IngListItemLabel>
                        </IngListItemCheckWrap>
                    </IngListItem>
                ))}
            </ul>
        </>
    );
};

export default RecipeInngredientsList;

