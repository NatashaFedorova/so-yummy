import { useState, useEffect } from 'react';
import { ConfigNameInput, StyledRxPerson } from './UserInfoModal.styled';
import { StyledHiOutlinePencil } from './UserInfoModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserData } from 'redux/user/userOperation';
import { LeftInputDiv } from './UserInfoModal.styled';

import {
  ChangeImageInput,
  ConfigAvatarArea,
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
  const [nameError, setNameError] = useState('');

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

  const handleName = e => {
    setNewUserName(e.target.value);
    const re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('A name must contain just A-Z, a-z, 0-9 characters');
    } else if (e.target.value.length < 2 || e.target.value.length > 20) {
      setNameError('A name must contain 2 to 20 characters.');
    } else {
      setNameError('');
    }
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
      setNewUserName(`${name}`);
      setImageRef(avatarUrl);
      setGoodImage('false');
      setNameError('');
      closeUserInfoModal();
    });
  }, [dispatch, avatarUrl, closeUserInfoModal]);

  return (
    <>
      <ConfigAvatarArea
        style={{
          backgroundImage: `url(${imageRef})`,
        }}
      />
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
          <ConfigNameLabel
            style={nameError ? { borderColor: 'red ', color: 'red' } : {}}
          >
            <LeftInputDiv>
              <StyledRxPerson />
              <ConfigNameInput
                name="name"
                value={newUserName}
                onChange={handleName}
                style={nameError ? { color: 'red ' } : {}}
              />
            </LeftInputDiv>
            <StyledHiOutlinePencil />
          </ConfigNameLabel>
        </label>

        <SendChangeBTN
          disabled={(!goodImage || nameError) && 'disabled'}
          style={
            !goodImage || nameError ? { background: 'red', color: 'white' } : {}
          }
        >
          {(!goodImage && !nameError) || (!goodImage && nameError)
            ? 'Please select an avatar with size 3 MB'
            : ''}
          {nameError && goodImage ? `${nameError}` : ''}
          {goodImage && !nameError ? `Save changes` : ''}
        </SendChangeBTN>
      </form>
    </>
  );
};
