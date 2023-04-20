import {
  MainPageTitle,
  MainPageTitleAccent,
  MainPageText,
} from './HeroTitle.styled';
import SearchInput from '../SearchInput/SearchInput';

const HeroTitle = () => {
  return (
    <div>
      <MainPageTitle>
        <MainPageTitleAccent>So</MainPageTitleAccent>Yummy
      </MainPageTitle>
      <MainPageText>
        "What to cook?" is not only a recipe app, it is, in fact, <br /> your
        cookbook. You can add your own recipes to <br /> save them for the
        future.
      </MainPageText>
      <SearchInput />
    </div>
  );
};

export default HeroTitle;
