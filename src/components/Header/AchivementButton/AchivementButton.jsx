import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { useEffect, useState } from 'react';
import achievement from '../../constants/achievement';
import AchivementModal from '../AchivementModal/AchivementModal';
import { Button, GiTrophyCupIcon, Text } from './AchivementButton.styled';

const visibilityModal = (type, currentValue) => {
  return achievement[type]
    .filter(value => value <= currentValue)
    .map(e => {
      return { type, value: e };
    });
};

const AchivementButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const [isNew, setIsNew] = useState(false);
  const [visit, setVisit] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [ownRecipes, setOwnRecipes] = useState([]);
  const [render, setRender] = useState(1);

  const { numberOfVisits, numberOfFavorites, numberOfOwnRecipes } = user;

  useEffect(() => {
    setVisit(visibilityModal('numberOfVisits', numberOfVisits));
    setFavorite(visibilityModal('numberOfFavorites', numberOfFavorites));
    setOwnRecipes(visibilityModal('numberOfOwnRecipes', numberOfOwnRecipes));

    if (render) {
      setRender(0);
      setIsNew(false);
      return;
    }
    setIsNew(true);
  }, [
    numberOfVisits,
    numberOfFavorites,
    numberOfOwnRecipes,
    render,
    setRender,
  ]);

  const onClickBtnOpenModal = () => {
    setIsModalOpen(true);
    setIsNew(false);
  };

  return (
    <>
      <Button type="button" onClick={onClickBtnOpenModal}>
        <GiTrophyCupIcon />
        {isNew && <Text>NEW</Text>}
      </Button>
      {isModalOpen && (
        <AchivementModal
          onClose={setIsModalOpen}
          achivmenеts={{ visit, favorite, ownRecipes }}
        />
      )}
    </>
  );
};

export default AchivementButton;
