import { createPortal } from 'react-dom';
import { Box, Text } from './MotivationCard.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
const modalRoot = document.querySelector('#modal-root');

const MotivationCard = () => {
  const user = useSelector(selectUser);
  console.log(achievement);
  console.log(user.numberOfVisits);
  console.log(user.numberOfOwnRecipes);
  console.log(user.numberOfFavorites);

  return createPortal(
    <Box>
      <Text>Visites: {user.numberOfVisits}</Text>
      <Text>My recipe: {user.numberOfOwnRecipes}</Text>
      <Text>Favorite: {user.numberOfFavorites}</Text>
    </Box>,
    modalRoot
  );
};
export default MotivationCard;

//  numberOfVisits: 6,
// numberOfOwnRecipes: 0,
// numberOfFavorites: 0
// getAddReceiptCategories
