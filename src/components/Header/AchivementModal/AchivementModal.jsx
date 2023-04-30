import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import MotivationCard from 'components/Header/MotivationCard';
import { useEffect, useState } from 'react';
import achievement from '../../constants/achievement';
import {
  Backdrop,
  List,
  MotivationCardThumb,
  MotivationCardText,
  IconClose,
  BtnClose,
} from './AchivementModal.styled';
const modalRoot = document.querySelector('#modal-root');

const visibilityModal = (type, currentValue) => {
  const value = achievement[type].find(value => value === currentValue);
  return value ? { type, value } : undefined;
};

const AchivementModal = ({ onClose }) => {
  const user = useSelector(selectUser);
  const [visit, setVisit] = useState(null);
  const [favorite, setFavorite] = useState(null);
  const [ownRecipes, setOwnRecipes] = useState(null);

  const { numberOfVisits, numberOfFavorites, numberOfOwnRecipes } = user;

  useEffect(() => {
    setVisit(visibilityModal('numberOfVisits', numberOfVisits));
    setFavorite(visibilityModal('numberOfFavorites', numberOfFavorites));
    setOwnRecipes(visibilityModal('numberOfOwnRecipes', numberOfOwnRecipes));
  }, [numberOfVisits, numberOfFavorites, numberOfOwnRecipes]);

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onKeydown = e => {
      if (e.code === 'Escape') {
        onClose(false);
      }
    };
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onClose]);

  return createPortal(
    <Backdrop onClick={onClickBackdrop}>
      {!visit && !favorite && !ownRecipes && (
        <MotivationCardThumb>
          <BtnClose type="button" onClick={() => onClose(false)}>
            <IconClose />
          </BtnClose>
          <MotivationCardText>
            You don't have any achievements yet
          </MotivationCardText>
        </MotivationCardThumb>
      )}
      <List>
        {visit && <MotivationCard type={visit.type} value={visit.value} />}
        {favorite && (
          <MotivationCard type={favorite.type} value={favorite.value} />
        )}
        {ownRecipes && (
          <MotivationCard type={ownRecipes.type} value={ownRecipes.value} />
        )}
      </List>
    </Backdrop>,
    modalRoot
  );
};

export default AchivementModal;
