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
import { refreshUserLite } from '../../redux/auth/authOperation';
import {
  AddIngredientToShoppingList,
  RemoveIngredientFromShoppingList,
} from '../../redux/recipes/operations/getRecipeById';

const RecipeInngredientsList = ({ info, recId, shopList }) => {
  const dispatch = useDispatch();
  //const isInTrueShopList = useSelector(IsIngredientToShopList);

  const onHandleChange = async info => {
    await dispatch(AddIngredientToShoppingList(info));
    // await dispatch(refreshUser());
    await dispatch(refreshUserLite());
  };

  const removeFromShopList = async ingredientId => {
    await dispatch(RemoveIngredientFromShoppingList(ingredientId));
    //await dispatch(refreshUser());
    await dispatch(refreshUserLite());
  };

  const isInShopingList = shopList
    .filter(value => value.recipeID === recId)
    .flatMap(item => item.ingredientId);

  const ShoppingListToRemove = shopList.filter(
    value => value.recipeID === recId
  );

  //console.log('show shop list ', isInTrueShopList);

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
                onChange={
                  isInShopingList.some(value => value === item._id)
                    ? () =>
                        removeFromShopList({
                          _id: ShoppingListToRemove.find(
                            ingredient => ingredient.ingredientId === item._id
                          )._id,
                        })
                    : () =>
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
