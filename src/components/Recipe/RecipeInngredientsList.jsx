import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';
//import { useState } from 'react';

import RecipeTableHead from '../RecipeTableHead/RecipeTableHead';
import {
  IngImg,
  IngListItem,
  IngListItemInfo,
  IngListItemInfoText,
  IngListItemNumber,
  IngListItemNumberWrap,
  IngListItemInput,
  IngListItemLabel,
  IngListItemCheckWrap,
} from './RecipeInngredientsList.styled';

//import { IsIngredientToShopList } from '../../redux/recipes/selectors/selectRecipeById';
import { refreshUser } from '../../redux/auth/authOperation';
import { AddIngredientToShoppingList } from '../../redux/recipes/operations/getRecipeById';
//import { selectUser } from '../../redux/auth/authSelectors';

const RecipeInngredientsList = ({ info, recId, shopList }) => {
  const dispatch = useDispatch();
  //const isInShopList = useSelector(IsIngredientToShopList);
  // const [isChecked, setIsChecked] = useState(false);
  //const userInfo = useSelector(selectUser);

  const onHandleChange = async info => {
    await dispatch(AddIngredientToShoppingList(info));
    await dispatch(refreshUser())
  };

  const isInShopingList = shopList
    .filter(value => value.recipeID === recId)
    .flatMap(item => item.ingredientId);

  // console.log('is resipe in true ', isInShopingList);
  // console.log('Check status ', isInShopList);
  // console.log('Is User ?  ', shopList);
  // console.log('from userInfo ', userInfo);
  // console.log('recipe Id  ', recId);

  return (
    <>
      <RecipeTableHead
        titleLeft={'Ingredients'}
        titleCenter={'Number'}
        titleRight={'Add to list'}
      />
      <ul>
        {info.map(item => (
          <IngListItem key={item._id}>
            <IngListItemInfo>
              <IngImg src={item.thb} alt={item.ttl} />
              <IngListItemInfoText>{item.ttl}</IngListItemInfoText>
            </IngListItemInfo>
            <IngListItemNumberWrap>
              <IngListItemNumber>{item.measure}</IngListItemNumber>
            </IngListItemNumberWrap>
            <IngListItemCheckWrap>
              <IngListItemInput
                type="checkbox"
                id="vehicle4"
                name="vehicle4"
                checked={isInShopingList.some(value => value === item._id)}
                onChange={() =>
                  onHandleChange({
                    ingredientId: item._id,
                    title: item.ttl,
                    _id: item._id,
                    image: item.thb,
                    weight: item.measure,
                    recipeID: recId,
                  })
                }
              />
              <IngListItemLabel htmlFor="vehicle4"> </IngListItemLabel>
            </IngListItemCheckWrap>
          </IngListItem>
        ))}
      </ul>
    </>
  );
};

export default RecipeInngredientsList;

