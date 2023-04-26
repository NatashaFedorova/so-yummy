import { useRef, useState } from 'react';
import { BsDropletFill } from 'react-icons/bs';

import {
  FileInput,
  InputWrapper,
  InputsWrapper,
  Label,
  ModalText,
  ModalTitle,
  ModalWrapper,
  PictureThumb,
  RecipeDescrWrapper,
  TextInput,
  UpdatedSelect,
  BrowseButton,
} from './RecipeDescriptionFields.styled';
import { ModalWindow } from 'components/AddRecipe/Modal/Modal';
import { size } from 'components/constants/deviceType/deviceType';
import useTime from 'components/AddRecipe/hooks/hooks';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/recipes/selectors/addRecipeSelectors';

export const cutWidth = width => {
  const newValue = width.toString().replace('px', '').trim();
  return Number(newValue);
};

export const colorStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'transparent',
    border: isFocused ? 'none' : 'none',
    borderRadius: 0,
    textAlign: 'right',
    paddingBottom: 8,
    fontSize: 13,
    color: '#000000',
    ':hover': {
      borderBottomColor: 'rgba(35, 38, 42, 0.2)',
    },
  }),
  indicatorSeparator: styles => ({ ...styles, backgroundColor: 'transparent' }),
  indicatorContainer: styles => ({
    ...styles,
    color: '#8BAA36',
  }),
  option: styles => {
    return {
      ...styles,
      color: '#000000',
      opacity: 0.5,
      fontSize: 14,
      lineHeight: 1.5,
    };
  },
  menu: styles => ({
    ...styles,
    right: 0,
    width: 150,
    height: 230,
    padding: '8px 8px 8px 14px',
    alignSelf: 'flex-end',
  }),
  menuList: styles => ({
    ...styles,
    height: '100%',
  }),
};

const RecipeDescriptionField = ({
  photo,
  changeHandler: dataChangeHandler,
  initialDataState,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [photoUrl, setPhotoUrl] = useState(
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
  );

  const [isOver, setIsOver] = useState(false);
  const [dragText, setDragText] = useState('Drag & Drop Picture here');

  const addFileInput = useRef(null);

  const { initialData } = useTime(5, 120, 5);
  const categories = useSelector(selectCategories);

  const clickHandler = () => {
    if (Number(document.documentElement.clientWidth) < cutWidth(size.desktop)) {
      addFileInput.current.click();
    } else {
      openModal();
    }
  };

  const changeHandler = async event => {
    new Promise(resolve =>
      resolve(
        (photo.current = event.target.files[event.target.files.length - 1])
      )
    ).then(() => {
      showPhoto();
    });

    closeModal();
  };

  const dragOverHandler = event => {
    event.preventDefault();
    setIsOver(true);
    setDragText('Release to Upload Photo');
  };

  const dragLeaveHandler = () => {
    setIsOver(false);
    setDragText('Drag & Drop');
  };

  const dropHandler = event => {
    event.preventDefault();

    new Promise(resolve =>
      resolve((photo.current = event.dataTransfer.files[0]))
    ).then(() => {
      showPhoto();
    });

    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showPhoto = () => {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      const imgUrl = fileReader.result;
      setPhotoUrl(imgUrl);
    };

    fileReader.readAsDataURL(photo.current);
  };

  const inputHandleChange = event => {
    dataChangeHandler(event.target.name, event.target.value);
  };

  const handleChange = (selectedOption, actionMeta) => {
    if (actionMeta.name === 'category') {
      dataChangeHandler(actionMeta.name, selectedOption.value);
    }

    if (actionMeta.name === 'time') {
      dataChangeHandler(actionMeta.name, selectedOption.label);
    }
  };

  return (
    <RecipeDescrWrapper>
      <PictureThumb
        onClick={clickHandler}
        onDragOver={dragOverHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
      >
        <img src={photoUrl} alt="recept" />
      </PictureThumb>
      <FileInput
        type="file"
        onChange={changeHandler}
        ref={addFileInput}
        name="recipe-picture"
        accept="image/png, image/gif, image/jpeg, image/svg"
      />
      <InputsWrapper>
        <InputWrapper>
          <Label htmlFor="title">Enter item title</Label>
          <TextInput
            id="title"
            type="text"
            placeholder=" "
            name="title"
            onChange={inputHandleChange}
            value={initialDataState.title}
            required
            pattern="^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="description">Enter about recipe</Label>
          <TextInput
            id="description"
            type="text"
            placeholder=" "
            name="description"
            onChange={inputHandleChange}
            required
            pattern="^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Category</Label>
          <UpdatedSelect
            placeholder=" "
            name="category"
            id="category"
            options={categories}
            styles={colorStyles}
            onChange={handleChange}
            required
            pattern="^[a-zA-Z]+$"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Cooking time</Label>
          <UpdatedSelect
            placeholder=" "
            options={initialData}
            name="time"
            id="time"
            styles={colorStyles}
            isSearchable={false}
            onChange={handleChange}
            required
            pattern="^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$"
          />
        </InputWrapper>
      </InputsWrapper>
      {isOpen && (
        <ModalWindow
          onClose={closeModal}
          isOver={isOver}
          isOpen={isOpen}
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          onDragLeave={dragLeaveHandler}
        >
          <ModalWrapper>
            <ModalTitle style={{ textTransform: 'capitalize' }}>
              {dragText} <BsDropletFill size={44} color="#8baa36" />
            </ModalTitle>
            <ModalText>OR</ModalText>
            <BrowseButton
              onClick={() => {
                addFileInput.current.click();
              }}
            >
              Browse Picture
            </BrowseButton>
          </ModalWrapper>
        </ModalWindow>
      )}
    </RecipeDescrWrapper>
  );
};

export default RecipeDescriptionField;
