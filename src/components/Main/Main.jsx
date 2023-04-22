import Container from 'components/constants/Container/Container.styled';

import { HeroBackground, SectionRelative, HeroContainer } from './Main.styled';
// import { NavLink, useNavigate } from 'react-router-dom';

import HeroTitle from './Hero/HeroTitle';
import HeroImage from './Hero/HeroImage';
import MainCategories from './MainCategories/MainCategories';
import OtherCategoriesBtn from './OtherCategories/OtherCategoriesBtn';

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
          <MainCategories />
          <OtherCategoriesBtn />
        </Container>
      </SectionRelative>
    </>
  );
};

export default Main;
