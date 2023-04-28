import { useState, useEffect } from 'react';
import { ConfigNameInput, StyledRxPerson } from './UserInfoModal.styled';
import { StyledHiOutlinePencil } from './UserInfoModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserData } from 'redux/user/userOperation';
import { LeftInputDiv } from './UserInfoModal.styled';

import {
  ChangeImageInput,
  ConfigAvatarArea,
  ConfigAvatarUser,
  ConfigNameLabel,
  SendChangeBTN,
  StyledAiFillPlusCircle,
} from './UserInfoModal.styled';
import { selectUser } from 'redux/auth/authSelectors';

export const UserFormModal = ({ closeUserInfoModal }) => {
  const { name, avatarUrl } = useSelector(selectUser);
  const reader = new FileReader();
  const dispatch = useDispatch();

  const [newUserName, setNewUserName] = useState(`${name}`);
  const [imageRef, setImageRef] = useState(avatarUrl);
  const [goodImage, setGoodImage] = useState('false');

  const handleFileChange = event => {
    let file = event.target.files[0];
    if (file.size > 3145728) {
      setGoodImage(false);
    } else {
      setGoodImage(true);
    }
    reader.onload = event => {
      setImageRef(event.currentTarget.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const form = document.getElementById('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const { avatarImage, name } = this.elements;
      const data = new FormData();
      data.append('avatarImage', avatarImage.files[0]);
      data.append('name', name.value);
      if (goodImage) {
        dispatch(changeUserData(data));
        setNewUserName(`${name}`);
        setImageRef(avatarUrl);
        setGoodImage('false');
        closeUserInfoModal();
      }
    });
  }, [dispatch, goodImage, avatarUrl, closeUserInfoModal]);

  return (
    <>
      <ConfigAvatarArea>
        <ConfigAvatarUser src={imageRef} alt={'User avatar'} />
      </ConfigAvatarArea>
      <form id="form" encType="multipart/form-data">
        <label>
          <StyledAiFillPlusCircle />
          <ChangeImageInput
            type="file"
            name="avatarImage"
            accept="image/png, image/gif, image/jpeg, image/svg, image/jpg"
            onChange={handleFileChange}
            multiple
          />
        </label>

        <label>
          <ConfigNameLabel>
            <LeftInputDiv>
              <StyledRxPerson />
              <ConfigNameInput
                name="name"
                value={newUserName}
                onChange={event => setNewUserName(event.target.value)}
              />
            </LeftInputDiv>
            <StyledHiOutlinePencil />
          </ConfigNameLabel>
        </label>

        <SendChangeBTN
          disabled={!goodImage && 'disabled'}
          style={!goodImage ? { background: 'red' } : { background: '#8baa36' }}
        >
          {!goodImage
            ? 'Please select an avatar with size 3 MB'
            : 'Save changes'}
        </SendChangeBTN>
      </form>
    </>
  );
};
