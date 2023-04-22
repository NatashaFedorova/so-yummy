import Container from 'components/constants/Container/Container.styled';
import { FakeMainPageTitle, FakeMainPageTitleWrap } from 'components/Favorite/Favorite.styled';

const MyRecipesPage = () => {
  return (
    <Container>
      <FakeMainPageTitleWrap>
        <FakeMainPageTitle>My recipes</FakeMainPageTitle>
      </FakeMainPageTitleWrap>
      <section>
        {/* <FavoriteList /> */}
      </section>
    </Container>
  );
};

export default MyRecipesPage;
