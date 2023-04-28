import { useState } from 'react';
import AchivementModal from '../AchivementModal/AchivementModal';
import { Button, GiTrophyCupIcon } from './AchivementButton.styled';

const AchivementButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsModalOpen(true)}>
        <GiTrophyCupIcon />
      </Button>
      {isModalOpen && <AchivementModal onClose={setIsModalOpen} />}
    </>
  );
};

export default AchivementButton;
