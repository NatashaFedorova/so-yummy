import {
  FakeMainPageTitle,
  FakeMainPageTitleWrap,
} from 'components/Favorite/Favorite.styled';
import {
  MainStyleConponent,
  DecoreBox,
  SectionContainer,
  Section,
  Square,
  SecondSquare,
  SquareСircle,
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
} from './ShoppingList.styled';
import defaultFood from './default-food.png';
import { Container } from '@mui/system';
const ShoppingList = ({}) => {
  // render
  return (
    <Container>
      {/* <ShoppingListTitle>Shopping list</ShoppingListTitle> */}
      <FakeMainPageTitleWrap style={{ paddingBottom: '72px' }}>
        <FakeMainPageTitle>Shopping list</FakeMainPageTitle>
      </FakeMainPageTitleWrap>
      <ShoppingListWrapper>
        <IngredientsTable>
          <ShoppingListName>Product</ShoppingListName>
          <ShoppingListNumber>Number</ShoppingListNumber>
          <ShoppingListButton>Remove</ShoppingListButton>
        </IngredientsTable>
        <IngredientCard>
          <IngredientsList>
            <IngredientImage>
              <IngredientImageBackground>
                <img alt="ingredient" src={defaultFood} />
              </IngredientImageBackground>
              <IngredientTitle>Lorem</IngredientTitle>
            </IngredientImage>

            <IngredientWeight>500g</IngredientWeight>

            <IngredientDeleteButton></IngredientDeleteButton>
          </IngredientsList>
        </IngredientCard>
        <IngredientCard>
          <IngredientsList>
            <IngredientImage>
              <IngredientImageBackground>
                <img alt="ingredient" src={defaultFood} />
              </IngredientImageBackground>
              <IngredientTitle>Lorem</IngredientTitle>
            </IngredientImage>

            <IngredientWeight>500g</IngredientWeight>

            <IngredientDeleteButton></IngredientDeleteButton>
          </IngredientsList>
        </IngredientCard>
      </ShoppingListWrapper>
    </Container>
  );
};

export default ShoppingList;
