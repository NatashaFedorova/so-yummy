import { createPortal } from 'react-dom';
import {
  AgreedBTN,
  ButtonSet,
  CancelBTN,
  Modal,
  ModalOverlay,
  ModalWrapper,
  StyledGrFormClose,
} from './LogoutModal.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { clearFavorite } from 'redux/favorite/favoriteOperation';
import { clearMyRecipes } from 'redux/myRecipes/myRecipesOperation';

const modalRoot = document.querySelector('#modal-root');

export const UserLogoutModal = ({ closeLogoutModal }) => {
  const dispatch = useDispatch();
  const onLogOutBtnClick = () => {
    dispatch(clearFavorite());
    dispatch(clearMyRecipes());
    dispatch(logOut());
  }
  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeLogoutModal();
    }
  };

  return createPortal(
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalWrapper onClick={onClickBackdrop}>
        <Modal>
          <p>Are you sure you want to log out?</p>
          <ButtonSet>
            <AgreedBTN onClick={onLogOutBtnClick}>Log out</AgreedBTN>
            <CancelBTN onClick={closeLogoutModal}>Cancel</CancelBTN>
          </ButtonSet>
          <StyledGrFormClose onClick={closeLogoutModal} />
        </Modal>
      </ModalWrapper>
    </ModalOverlay>,
    modalRoot
  );
};
