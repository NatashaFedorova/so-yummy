import Container from 'components/constants/Container';

import { HeroBackground, SectionRelative } from './Main.styled';

const Main = () => {
  return (
    <>
      <SectionRelative>
        <HeroBackground>
          <Container>
            <p>HERO</p>
            <p>List</p>
          </Container>
        </HeroBackground>
        <Container></Container>
      </SectionRelative>
    </>
  );
};

export default Main;
