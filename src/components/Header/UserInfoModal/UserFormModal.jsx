import { useState } from 'react';
import { StyledRxPerson } from './UserInfoModal.styled';
import { StyledHiOutlinePencil } from './UserInfoModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserData } from 'redux/user/userOperation';
import { selectCurrentUser } from 'redux/user/userSelectors';
import { LeftInputDiv } from './UserInfoModal.styled';

import {
  ChangeImageInput,
  ConfigAvatarArea,
  ConfigAvatarUser,
  ConfigNameLabel,
  SendChangeBTN,
  StyledAiFillPlusCircle,
} from './UserInfoModal.styled';
import axios from 'axios';

axios.defaults.baseURL = 'https://t2d-soyammy-backend.onrender.com/api/';

export const UserFormModal = () => {
  const { name, avatarUrl } = useSelector(selectCurrentUser);
  const reader = new FileReader();
  const dispatch = useDispatch();

  const [newUserName, setNewUserName] = useState(`${name}`);
  const [imageFile, setImageFile] = useState('');
  const [imageRef, setImageRef] = useState(avatarUrl);

  // const inputValue = document.getElementById('file-upload');

  const handleFileChange = event => {
    let file = event.target.files[0];
    setImageFile(file);

    reader.onload = event => {
      setImageRef(event.currentTarget.result);
    };
    reader.readAsDataURL(file);
  };

  const submitChange = () => {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('name', newUserName);

    dispatch(changeUserData(formData));
  };
  return (
    <>
      <ConfigAvatarArea>
        <ConfigAvatarUser src={imageRef} alt={'User avatar'} />
      </ConfigAvatarArea>
      <label>
        <StyledAiFillPlusCircle />
        <ChangeImageInput
          id="file-upload"
          type="file"
          name="image"
          onChange={handleFileChange}
          multiple
        />
      </label>

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
    </>
  );
};
