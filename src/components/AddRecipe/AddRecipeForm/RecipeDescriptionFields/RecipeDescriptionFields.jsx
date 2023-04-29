import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { ModalWindow } from 'components/AddRecipe/Modal/Modal';

import { selectCategories } from 'redux/recipes/selectors/addRecipeSelectors';
import { size } from 'components/constants/deviceType/deviceType';
import useTime from 'components/AddRecipe/hooks/hooks';

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
  ModalIcon,
} from './RecipeDescriptionFields.styled';

export const cutWidth = width => {
  const newValue = width.toString().replace('px', '').trim();
  return Number(newValue);
};

export const colorStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    textAlign: 'right',
    backgroundColor: 'transparent',

    borderRadius: 0,
    border: isFocused ? 0 : 0,

    boxShadow: isFocused ? 0 : 0,
    '&:hover': {
      border: isFocused ? 0 : 0,
    },
  }),
  indicatorSeparator: styles => ({ ...styles, backgroundColor: 'transparent' }),
  indicatorContainer: styles => ({
    ...styles,
  }),
  option: styles => {
    return {
      ...styles,
      lineHeight: 1.5,
    };
  },
  menu: styles => ({
    ...styles,
    right: 0,
    width: 150,
    height: 230,
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
  const [dragText, setDragText] = useState('Drop your picture here');

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
            classNamePrefix="Select"
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
            classNamePrefix="Select"
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
              {dragText} <ModalIcon />
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
