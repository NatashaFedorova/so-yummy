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
  ShoppingListTitle,
} from './ShoppingList.styled';
import defaultFood from './default-food.png';
const ShoppingList = ({}) => {
  // render
  return (
    <MainStyleConponent>
      <Section>
        <DecoreBox>
          <Square />
          <SecondSquare />
          <SquareСircle />
        </DecoreBox>
        <SectionContainer></SectionContainer>
        <ShoppingListTitle>Shopping list</ShoppingListTitle>
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
      </Section>
    </MainStyleConponent>
  );
};

export default ShoppingList;
