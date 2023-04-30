import { useDispatch } from 'react-redux';
import { useState } from 'react';

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
import SubLoading from './SubLoader';

import { refreshUserLite } from '../../redux/auth/authOperation';
import {
  AddIngredientToShoppingList,
  RemoveIngredientFromShoppingList,
} from '../../redux/recipes/operations/getRecipeById';

const RecipeInngredientsList = ({ info, recId, shopList }) => {
  const dispatch = useDispatch();

  const [isSubLoading, setIsSubLoading] = useState(false);

  const addToShopList = async info => {
    setIsSubLoading(true);
    await dispatch(AddIngredientToShoppingList(info));
    await dispatch(refreshUserLite());
    setIsSubLoading(false);
  };

  const removeFromShopList = async ingredientId => {
    setIsSubLoading(true);
    await dispatch(RemoveIngredientFromShoppingList(ingredientId));
    await dispatch(refreshUserLite());
    setIsSubLoading(false);
  };

  const isInShopingList = shopList
    .filter(value => value.recipeID === recId)
    .flatMap(item => item.ingredientId);

  const ShoppingListToRemove = shopList.filter(
    value => value.recipeID === recId
  );

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
              {isSubLoading ? (
                <SubLoading />
              ) : (
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
                          addToShopList({
                            ingredientId: item._id,
                            title: item.ttl,
                            _id: item._id,
                            image: item.thb,
                            weight: item.measure,
                            recipeID: recId,
                          })
                  }
                />
              )}
              <IngListItemLabel htmlFor="vehicle4"> </IngListItemLabel>
            </IngListItemCheckWrap>
          </IngListItem>
        ))}
      </ul>
    </>
  );
};

export default RecipeInngredientsList;
