import Container from 'components/constants/Container';
import DecoreBoxComponent from 'components/DecoreBoxComponent';
import {
  MainBox,
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
        <DecoreBoxComponent />
        <BoxForContent>
          <BoxForImg>
            <Img
              src={`${process.env.PUBLIC_URL}/images/errorPageNotFound/404-page.svg`}
              alt="people"
            />
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
