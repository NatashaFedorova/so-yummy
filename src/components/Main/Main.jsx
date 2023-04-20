import Container from 'components/constants/Container/Container.styled';

import { HeroBackground, SectionRelative, HeroContainer } from './Main.styled';

import HeroTitle from './Hero/HeroTitle';
import HeroImage from './Hero/HeroImage';

const Main = () => {
  return (
    <>
      <SectionRelative>
        <HeroBackground>
          <HeroContainer>
            <HeroTitle />
            <HeroImage />
          </HeroContainer>
        </HeroBackground>
        <Container>
          {/* <ul></ul>
          <a href=""></a> */}
        </Container>
      </SectionRelative>
    </>
  );
};

export default Main;
