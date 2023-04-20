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
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      background: '#8baa36',
                    }}
                  ></div>
                  <p>Salmon</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '174px',
                    alignItems: 'flex-start',
                    marginRight: '28px',
                  }}
                >
                  <p>400 g</p>
                  <button type="button">x</button>
                </div>
              </div>
            </Item>
          </List>
        </SectionContainer>
      </Section>
    </MainStyleConponent>
  );
};

export default ShoppingList;
