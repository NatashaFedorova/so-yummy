import Container from 'components/constants/Container';
import {
  MainStyleConponent,
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
        <Container>
          <Square />
          <SecondSquare />
          <SquareСircle />
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
        </Container>
      </Section>
    </MainStyleConponent>
  );
};

export default ShoppingList;
