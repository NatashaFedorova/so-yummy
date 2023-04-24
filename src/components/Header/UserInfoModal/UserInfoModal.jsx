import {
  // useEffect,
  useState,
} from 'react';
import {
  ChangeImageInput,
  ConfigAvatarArea,
  ConfigAvatarUser,
  ConfigNameLabel,
  Modal,
  ModalOverlay,
  ModalWrapper,
  SendChangeBTN,
  StyledAiFillPlusCircle,
  StyledGrFormClose,
} from './UserInfoModal.styled';
import { createPortal } from 'react-dom';
import { StyledRxPerson } from './UserInfoModal.styled';
import { StyledHiOutlinePencil } from './UserInfoModal.styled';
import { useDispatch } from 'react-redux';
import { changeUserData } from 'redux/user/userOperation';
// import { selectCurrentUser } from 'redux/user/userSelectors';
import { LeftInputDiv } from './UserInfoModal.styled';
import useAuth from 'hooks/useAuth';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = ({ closeUserInfoModal }) => {
  // const { name, avatarUrl } = useSelector(selectCurrentUser);

  const { user } = useAuth();
  const {name, avatarUrl} = user;
  const dispath = useDispatch();
  const reader = new FileReader();

  const [newUserName, setNewUserName] = useState(`${name}`);
  const [imageFile, setImageFile] = useState('');
  const [imageRef, setImageRef] = useState(avatarUrl);

  // const form = document.getElementById('form');
  // const inputValue = document.getElementById('file-upload');

  const handleFileChange = event => {
    let file = event.target.files[0];
    setImageFile(file);

    console.log('imageFile', imageFile); // додано, щоб не коментувати значення, яке не використовується

    reader.onload = event => {
      setImageRef(event.currentTarget.result);
    };
    reader.readAsDataURL(file);
  };

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeUserInfoModal();
    }
  };

  const submitChange = () => {
    if (!(name === newUserName)) {
      dispath(changeUserData({ name: newUserName }));
    }
  };
  return createPortal(
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalWrapper onClick={onClickBackdrop}>
        <Modal>
          <ConfigAvatarArea>
            <ConfigAvatarUser src={imageRef} alt={'User avatar'} />
          </ConfigAvatarArea>
          <form id="form" encType="multipart/form-data">
            <label htmlFor="file-upload" className="custom-file-upload">
              <StyledAiFillPlusCircle />
              <ChangeImageInput
                id="file-upload"
                type="file"
                name="image"
                onChange={handleFileChange}
                multiple
              />
            </label>
          </form>

          <label>
            <ConfigNameLabel>
              <LeftInputDiv>
                <StyledRxPerson />
                <input
                  value={newUserName}
                  onChange={event => setNewUserName(event.target.value)}
                />
              </LeftInputDiv>
              <StyledHiOutlinePencil />
            </ConfigNameLabel>
          </label>
          <SendChangeBTN onClick={submitChange}>Save chandes</SendChangeBTN>
          <StyledGrFormClose onClick={closeUserInfoModal} />
        </Modal>
      </ModalWrapper>
    </ModalOverlay>,
    modalRoot
  );
};
