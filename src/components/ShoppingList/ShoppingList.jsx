import {
  MainStyleConponent,
  DecoreBox,
  SectionContainer,
  Section,
  SectionTitle,
  Square,
  SecondSquare,
  SquareСircle,
  ListTableHeards,
  ItemTableHeaders,
  Box,
  List,
  Item,
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
        <SectionContainer>
          <SectionTitle>Shopping list</SectionTitle>
          <ListTableHeards>
            <ItemTableHeaders>Product</ItemTableHeaders>
            <Box>
              <ItemTableHeaders>Number</ItemTableHeaders>
              <ItemTableHeaders>Remove</ItemTableHeaders>
            </Box>
          </ListTableHeards>
          <List>
            <Item>
              <img src="" alt="" />
              <p>Salmon</p>
              <input type="checkbox" name="" id="" />
            </Item>
          </List>
        </SectionContainer>
      </Section>
    </MainStyleConponent>
  );
};

export default ShoppingList;
