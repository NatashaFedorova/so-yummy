import { createPortal } from 'react-dom';
import { nanoid } from 'nanoid';
import MotivationCardText from 'components/Header/MotivationCardText';
import { useEffect } from 'react';

import {
  Backdrop,
  GlobalList,
  Item,
  Box,
  BoxForfavoriteCard,
  BoxForOwnRecipesCard,
  BoxForVisitsCard,
  MotivationCardThumb,
  Text,
  IconClose,
  BtnClose,
  Decor,
} from './AchivementModal.styled';
import textForMotivationCard from 'components/constants/textForMotivationCard';

const modalRoot = document.querySelector('#modal-root');

const AchivementModal = ({ onClose, achivmenеts }) => {
  const { visit, favorite, ownRecipes } = achivmenеts;
  const { noAchievements } = textForMotivationCard;
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

  const visibilityDefaultMotivationCard =
    visit.length === 0 && favorite.length === 0 && ownRecipes.length === 0;

  return createPortal(
    <Backdrop onClick={onClickBackdrop}>
      {visibilityDefaultMotivationCard && (
        <MotivationCardThumb>
          <BtnClose type="button" onClick={() => onClose(false)}>
            <IconClose />
          </BtnClose>
          <Text>{noAchievements}</Text>
        </MotivationCardThumb>
      )}
      <Box>
        {!visibilityDefaultMotivationCard && (
          <GlobalList>
            {visit &&
              visit.map(item => {
                return (
                  <Item key={nanoid()}>
                    <BoxForVisitsCard>
                      <MotivationCardText card={item} />
                      <Decor />
                    </BoxForVisitsCard>
                  </Item>
                );
              })}
            {favorite &&
              favorite.map(item => {
                return (
                  <Item key={nanoid()}>
                    <BoxForfavoriteCard>
                      <MotivationCardText card={item} />
                      <Decor />
                    </BoxForfavoriteCard>
                  </Item>
                );
              })}

            {ownRecipes &&
              ownRecipes.map(item => {
                return (
                  <Item key={nanoid()}>
                    <BoxForOwnRecipesCard>
                      <MotivationCardText card={item} />
                      <Decor />
                    </BoxForOwnRecipesCard>
                  </Item>
                );
              })}
          </GlobalList>
        )}
      </Box>
    </Backdrop>,
    modalRoot
  );
};

export default AchivementModal;
