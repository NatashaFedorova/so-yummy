import Container from 'components/constants/Container/Container.styled';

import { HeroBackground, SectionRelative } from './Main.styled';

import HeroTitle from './Hero/HeroTitle';
import HeroImage from './Hero/HeroImage';
import SearchInput from './SearchInput/SearchInput';

const Main = () => {
  return (
    <>
      <SectionRelative>
        <HeroBackground>
          <Container>
            <HeroTitle />
            <HeroImage />
            <SearchInput />
          </Container>
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
