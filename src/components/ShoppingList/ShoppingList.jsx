import {
  MainStyleConponent,
  DecoreBox,
  SectionContainer,
  Section,
  Square,
  SecondSquare,
  SquareСircle,
  IngredientsTable,
  ShoppingListProduct,
  ShoppingListItem,
  ShoppingListName,
  ShoppingListNumber,
  ShoppingListButton,
  ShoppingListWrapper,
  ShoppingListImage,
  IngredientCard,
  IngredientsList,
  IngredientImage,
  IngredientImageBackground,
  IngredientWeight,
  IngredientDeleteButton,
} from './ShoppingList.styled';

const ShoppingList = () => {
  return (
    <MainStyleConponent>
      <Section>
        <DecoreBox>
          <Square />
          <SecondSquare />
          <SquareСircle />
        </DecoreBox>
        <SectionContainer></SectionContainer>

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
                  <img />
                </IngredientImageBackground>
                <p>Lorem</p>
              </IngredientImage>

              <IngredientWeight>500g</IngredientWeight>
              <li>
                <IngredientDeleteButton></IngredientDeleteButton>
              </li>
            </IngredientsList>
          </IngredientCard>
        </ShoppingListWrapper>
      </Section>
    </MainStyleConponent>
  );
};

export default ShoppingList;
