import Container from 'components/constants/Container';
import {
  MainBox,
  DecoreBox,
  Square,
  SecondSquare,
  SquareСircle,
  Img,
  BoxForImg,
  BoxForContent,
  Text,
  PartText,
} from './ErrorPageNotFoundComponent.styled';

const ErrorPageNotFoundComponent = () => {
  return (
    <MainBox>
      <Container>
        <DecoreBox>
          <Square />
          <SecondSquare />
          <SquareСircle />
        </DecoreBox>
        <BoxForContent>
          <BoxForImg>
            <Img src="./images/errorPageNotFound/404-page.svg" alt="people" />
          </BoxForImg>
          <Text>
            <PartText>We are sorry,</PartText>
            but the page you were looking for can&#39;t be found..
          </Text>
        </BoxForContent>
      </Container>
    </MainBox>
  );
};

export default ErrorPageNotFoundComponent;
