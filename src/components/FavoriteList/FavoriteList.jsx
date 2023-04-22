// import { useSelector } from 'react-redux';

import FavoriteItem from 'components/FavoriteItem/FavoriteItem';
import { StyledFavoriteList } from './FavoriteList.styled';
// import ContactsItem from '../ContactsItem/ContactsItem';
// import { List } from './ContactsList.styled';

const FavoriteList = () => {
  // const contacts = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.filter);

  // const filtredContacts = getFiltredContacts();

  // function getFiltredContacts() {
  //   const normalizeFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  return (
    <>
      <StyledFavoriteList >
        <FavoriteItem />
        <FavoriteItem />
        <FavoriteItem />
        {/* {filtredContacts.map(({ id, name, number }) => (
          <ContactsItem key={id} contact={{ id, name, number }} />
        ))} */}
      </StyledFavoriteList>
    </>
  );
};

export default FavoriteList;

// TODO - add h2 <FavoriteListTitle /> - with vis hidden 