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
import axios from 'axios';
import { selectUser } from 'redux/auth/authSelectors';

axios.defaults.baseURL = 'https://t2d-soyammy-backend.onrender.com/api/';

export const UserFormModal = () => {
  const { name, avatarUrl } = useSelector(selectUser);
  const reader = new FileReader();
  const dispatch = useDispatch();

  const [newUserName, setNewUserName] = useState(`${name}`);
  // const [imageFile, setImageFile] = useState('');
  const [imageRef, setImageRef] = useState(avatarUrl);

  const handleFileChange = event => {
    let file = event.target.files[0];
    // setImageFile(file);
    console.log(file);
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
      dispatch(changeUserData(data));
    });
  }, [dispatch]);

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
            accept="image/png, image/gif, image/jpeg"
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

        <SendChangeBTN>Save chandes</SendChangeBTN>
      </form>
    </>
  );
};
