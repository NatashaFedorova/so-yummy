import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from "components/constants/Container/Container.styled";
import { FakeMainPageTitle, FakeMainPageTitleWrap, FavoriteSection} from "components/Favorite/Favorite.styled";
import FavoriteList from "components/FavoriteList/FavoriteList";
import Loading from "components/Loading/Loading";
import { selectFavoriteIsLoading } from 'redux/favorite/favoriteSelectors';
import { getFavorite } from 'redux/favorite/favoriteOperation';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectFavoriteIsLoading);

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loading />}
      <Container>
        <FakeMainPageTitleWrap>
          <FakeMainPageTitle>Favorites</FakeMainPageTitle>
        </FakeMainPageTitleWrap>
        <FavoriteSection >
          <FavoriteList />
        </FavoriteSection>
      </Container>
    </>
  );
};

export default FavoritePage;


// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { Section, Container, Box } from 'components/App/App.styled'; 
// import ContactForm from 'components/ContactForm/ContactForm';
// import Filter from 'components/Filter/Filter';
// import ContactsList from 'components/ContactsList/ContactsList';
// import { getContacts } from 'redux/contacts/contactsOperations';

// const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts.items);
//   const isShow = contacts.length > 0;

//   useEffect(() => {
//     dispatch(getContacts());
//   }, [dispatch]);

//   return (
//     <Section>
//       <Container>
//         <ContactForm />
//         {isShow && (
//           <Box>
//             <h2>Your contacts</h2>
//             <Filter />
//             <ContactsList />
//           </Box>
//         )}
//       </Container>
//     </Section>
//   );
// };

// export default ContactsPage;
