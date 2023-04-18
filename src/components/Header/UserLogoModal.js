import { useState } from 'react';
import { UserInfoModal } from './UserInfoModal';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

export const UserLogoModal = ({ closeUserLogoModal }) => {
  //   const dispatch = useDispatch();
  //     const navigate = useNavigate();

  const [showUserInfoModal, setShowUserInfoModal] = useState(false);

  const openUserInfoModal = () => {
    setShowUserInfoModal(true);
  };
  const closeUserInfoModal = () => {
    setShowUserInfoModal(true);
  };
  //   const { isUserLoggedIn, user } = useAuth();

  // const onLogout = () => {
  //   dispatch(logoutUser())
  //     .unwrap()
  //     .then(() => {
  //       navigate('/login', { replace: true });
  //     });
  // };
  return (
    <div>
      <button onClick={openUserInfoModal}>Edit profile</button>
      <button>
        Log out
        <AiOutlineArrowRight />
      </button>
      {showUserInfoModal && (
        <UserInfoModal closeUserInfoModal={closeUserInfoModal} />
      )}
      <button onClick={closeUserLogoModal}>
        <GrFormClose />
      </button>
    </div>
  );
};
