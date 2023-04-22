import Container from "components/constants/Container/Container.styled";
import { FakeMainPageTitle, FakeMainPageTitleWrap, FavoriteSection} from "components/Favorite/Favorite.styled";
import FavoriteList from "components/FavoriteList/FavoriteList";

const FavoritePage = () => {
  return (
    <Container>
      <FakeMainPageTitleWrap>
        <FakeMainPageTitle>Favorites</FakeMainPageTitle>
      </FakeMainPageTitleWrap>
      <FavoriteSection >
        <FavoriteList />
      </FavoriteSection>
    </Container>
  );
};

export default FavoritePage;
