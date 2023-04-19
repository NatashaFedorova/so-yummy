import Container from 'components/constants/Container';
import {
  MainStyleConponent,
  Section,
  SectionTitle,
  // DecoreBox,
  Square,
  SecondSquare,
  SquareСircle,
} from './ShoppingList.styled';

const ShoppingList = () => {
  return (
    <MainStyleConponent>
      <Section>
        <Container>
          {/* <DecoreBox> */}
          <Square />
          <SecondSquare />
          <SquareСircle />
          {/* </DecoreBox> */}
          <SectionTitle>Shopping list</SectionTitle>
          <ul>
            <li>
              <p>Text</p>
            </li>
            <li>
              <p>Text</p>
            </li>
            <li>
              <p>Text</p>
            </li>
            <li>
              <p>Text</p>
            </li>
          </ul>
        </Container>
      </Section>
    </MainStyleConponent>
  );
};

export default ShoppingList;
