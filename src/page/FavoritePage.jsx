import { FakeMainPageTitle, FakeMainPageTitleWrap, FavoriteList } from "components/Favorite/Favorite.styled";
import Container from "components/constants/Container/Container.styled";

const FavoritePage = () => {
  return (
    <Container>
      <FakeMainPageTitleWrap>
        <FakeMainPageTitle>Favorites</FakeMainPageTitle>
      </FakeMainPageTitleWrap>
      <section>
        <FavoriteList />
      </section>
    </Container>
  );
};

export default FavoritePage;
