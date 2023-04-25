
import { useDispatch, useSelector } from 'react-redux';
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

import { AddIngredientToShopList } from '../../redux/recipes/selectors/selectRecipeById';

import { AddIngredientToShoppingList } from '../../redux/recipes/operations/getRecipeById';



const RecipeInngredientsList = ({ info }) => {

  const dispatch = useDispatch();
  const isInShopList = useSelector(AddIngredientToShopList);
  const [isChecked, setIsChecked] = useState(false);

  // const AddTo = async (Arr) => {

  //   try {
  //     await dispatch(AddIngredientToShopList(Arr))
  //     setIsChecked(true)
  //   }
  //   catch (error) {
  //     console.log(error);
  //     //   dispatch(AddIngredientToShopList(Arr));
  //     //   //setIsChecked(true)
  //   }
  // }

  const onFormSubmit = (info) => {
    dispatch(AddIngredientToShoppingList(info))
    setIsChecked(true)
  };


  //console.log('Check status ', isInShopList)

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
                checked={isChecked}
                onChange={() => onFormSubmit({ myid: item._id, ttl: item.ttl, _id: item._id, image: item.thb, measure: item.measure })}
              />
              <IngListItemLabel htmlFor="vehicle4" > </IngListItemLabel>
            </IngListItemCheckWrap>
          </IngListItem>
        ))}
      </ul>
    </>
  );
};

export default RecipeInngredientsList;

// 640cd5ac2d9fecf12e889855

