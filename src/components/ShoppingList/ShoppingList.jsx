import {
  FakeMainPageTitle,
  FakeMainPageTitleWrap,
} from 'components/Favorite/Favorite.styled';
import emptyShoppingListImage from './emptyShoppingListImage.png';
import {
  IngredientsTable,
  ShoppingListName,
  ShoppingListNumber,
  ShoppingListButton,
  ShoppingListWrapper,
  IngredientCard,
  IngredientsList,
  IngredientImage,
  IngredientImageBackground,
  IngredientWeight,
  IngredientDeleteButton,
  IngredientTitle,
  IngredientDeleteIcon,
} from './ShoppingList.styled';
import defaultFood from './default-food.png';
import Container from 'components/constants/Container/Container.styled';
import { refreshUserLite } from '../../redux/auth/authOperation';
import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { RemoveIngredientFromShoppingList } from 'redux/recipes/operations/getRecipeById';
import EmptyShoppingList from './EmptyShoppingList';

const ShoppingList = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const toDeleteIngredient = async id => {
    await dispatch(RemoveIngredientFromShoppingList(id));
    await dispatch(refreshUserLite());
  };
  // render
  return (
    <>
      <Container>
        <FakeMainPageTitleWrap style={{ paddingBottom: '72px' }}>
          <FakeMainPageTitle>Shopping list</FakeMainPageTitle>
        </FakeMainPageTitleWrap>
        <ShoppingListWrapper>
          <IngredientsTable>
            <ShoppingListName>Product</ShoppingListName>
            <ShoppingListNumber>Number</ShoppingListNumber>
            <ShoppingListButton>Remove</ShoppingListButton>
          </IngredientsTable>
          {user.shoppingList.length !== 0 ? (
            user.shoppingList.map(ingredient => {
              return (
                <IngredientCard key={ingredient._id}>
                  <IngredientsList>
                    <IngredientImage>
                      <IngredientImageBackground>
                        <img
                          alt="ingredient"
                          src={ingredient.image || defaultFood}
                        />
                      </IngredientImageBackground>
                      <IngredientTitle>{ingredient.title}</IngredientTitle>
                    </IngredientImage>

                    <IngredientWeight>{ingredient.weight}</IngredientWeight>

                    <IngredientDeleteButton
                      id={ingredient._id}
                      onClick={() => toDeleteIngredient(ingredient)}
                    >
                      <IngredientDeleteIcon></IngredientDeleteIcon>
                    </IngredientDeleteButton>
                  </IngredientsList>
                </IngredientCard>
              );
            })
          ) : (
            <EmptyShoppingList
              text={'Ooops, it`s empty'}
              imageSource={emptyShoppingListImage}
            ></EmptyShoppingList>
          )}
        </ShoppingListWrapper>
      </Container>
    </>
  );
};
export default ShoppingList;
