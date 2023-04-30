import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { ModalWindow } from 'components/AddRecipe/Modal/Modal';

import { selectCategories } from 'redux/recipes/selectors/addRecipeSelectors';
import { size } from 'components/constants/deviceType/deviceType';
import useTime from 'components/AddRecipe/hooks/hooks';
import {
  validationColors,
  validationMessages,
} from 'components/AddRecipe/helpers/vars';

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
import { ValidationMessage } from 'components/AddRecipe/AddRecipe.styled';

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
  noOptionsMessage: base => ({ ...base, color: '#000', textAlign: 'center' }),
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

  const [titleDirty, setTitleDirty] = useState(false);
  const [descriptionDirty, setDescriptionDirty] = useState(false);
  const [categoryDirty, setCategoryDirty] = useState(false);
  const [timeDirty, setTimeDirty] = useState(false);

  const [titleErrorMessage, setTitleErrorMessage] = useState(null);
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState(null);
  const [categoryErrorMessage, setCategoryErrorMessage] = useState(null);
  const [timeErrorMessage, setTimeErrorMessage] = useState(null);

  const [titleColor, setTitleColor] = useState(null);
  const [descriptionColor, setDescriptionColor] = useState(null);
  const [categoryColor, setCategoryColor] = useState(null);
  const [timeColor, setTimeColor] = useState(null);

  const addFileInput = useRef(null);

  const { initialData } = useTime(5, 120, 5);
  const categories = useSelector(selectCategories);
  const { title, description, category, time } = initialDataState;

  useEffect(() => {
    if (titleDirty && titleErrorMessage) {
      setTitleColor(validationColors.error);
    } else if (titleDirty && title.trim().length === 0) {
      setTitleColor(validationColors.error);
    } else {
      setTitleColor(null);
    }
  }, [titleDirty, titleErrorMessage, title]);

  useEffect(() => {
    if (descriptionDirty && descriptionErrorMessage) {
      setDescriptionColor(validationColors.error);
    } else if (descriptionDirty && description.trim().lenght === 0) {
      setDescriptionColor(validationColors.error);
    } else {
      setDescriptionColor(null);
    }
  }, [descriptionDirty, descriptionErrorMessage, description]);

  useEffect(() => {
    if (categoryDirty) {
      if (category.length === 0) {
        setCategoryErrorMessage(validationMessages.required.message);
      } else {
        setCategoryErrorMessage(null);
      }
    }

    if (categoryDirty && categoryErrorMessage) {
      setCategoryColor(validationColors.error);
    } else {
      setCategoryColor(null);
    }
  }, [categoryDirty, categoryErrorMessage, category]);

  useEffect(() => {
    if (timeDirty) {
      if (time.length === 0) {
        setTimeErrorMessage(validationMessages.required.message);
      } else {
        setTimeErrorMessage(null);
      }
    }

    if (timeDirty && timeErrorMessage) {
      setTimeColor(validationColors.error);
    } else {
      setTimeColor(null);
    }
  }, [timeDirty, timeErrorMessage, time]);

  // useEffect(() => {
  //   const isFormDataEmpty =
  //     !Boolean(name) && !Boolean(email) && !Boolean(password);
  //   const isFormDataValid =
  //     !Boolean(nameError) && !Boolean(emailError) && !Boolean(passwordError);
  //   const isTrue = !isFormDataEmpty && isFormDataValid && !passwordSecure;
  //   setIsValid(isTrue);
  // }, [
  //   name,
  //   email,
  //   password,
  //   nameError,
  //   emailError,
  //   passwordError,
  //   passwordSecure,
  // ]);

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
    setIsOver(false);
  };

  const inputHandleChange = event => {
    const regExp = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

    dataChangeHandler(event.target.name, event.target.value);

    switch (event.target.name) {
      case 'title':
        if (event.target.value.trim().length === 0) {
          setTitleErrorMessage(validationMessages.required.message);
        } else {
          if (!regExp.test(event.target.value.trim().toLowerCase())) {
            setTitleErrorMessage(validationMessages.wrongExtention.message);
          } else if (event.target.value.trim().length < 3) {
            setTitleErrorMessage(validationMessages.fromLimit.message);
          } else if (event.target.value.trim().length > 100) {
            setTitleErrorMessage(validationMessages.toLimit.message);
          } else {
            setTitleErrorMessage(null);
          }
        }
        break;

      case 'description':
        if (event.target.value.trim().length === 0) {
          setDescriptionErrorMessage(validationMessages.required.message);
        } else {
          if (!regExp.test(event.target.value.toLowerCase().trim())) {
            setDescriptionErrorMessage(
              validationMessages.wrongExtention.message
            );
          } else if (event.target.value.trim().length < 3) {
            setDescriptionErrorMessage(validationMessages.fromLimit.message);
          } else if (event.target.value.trim().length > 100) {
            setDescriptionErrorMessage(validationMessages.toLimit.message);
          } else {
            setDescriptionErrorMessage(null);
          }
        }
        break;

      default:
        return;
    }
  };

  const handleChange = (selectedOption, actionMeta) => {
    if (actionMeta.name === 'category') {
      dataChangeHandler(actionMeta.name, selectedOption.value);
    }

    if (actionMeta.name === 'time') {
      dataChangeHandler(actionMeta.name, selectedOption.label);
    }
  };

  const handleBlur = event => {
    switch (event.target.name) {
      case 'title':
        setTitleDirty(true);
        if (event.target.value.trim().length === 0) {
          setTitleErrorMessage(validationMessages.required.message);
        }
        break;
      case 'description':
        setDescriptionDirty(true);
        if (event.target.value.trim().length === 0) {
          setDescriptionErrorMessage(validationMessages.required.message);
        }
        break;
      default:
        return;
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
        <img src={photoUrl} alt="receipt" />
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
          <Label color={titleColor} htmlFor="title">
            Enter item title
          </Label>
          <TextInput
            id="title"
            type="text"
            placeholder=" "
            name="title"
            onChange={inputHandleChange}
            onBlur={handleBlur}
            value={title}
            required
            pattern="^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$"
            color={titleColor}
          />
          <ValidationMessage color={titleColor}>
            {titleErrorMessage}
          </ValidationMessage>
        </InputWrapper>
        <InputWrapper>
          <Label color={descriptionColor} htmlFor="description">
            Enter about recipe
          </Label>
          <TextInput
            id="description"
            type="text"
            placeholder=" "
            name="description"
            onChange={inputHandleChange}
            onBlur={handleBlur}
            value={description}
            required
            pattern="^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$"
            color={descriptionColor}
          />
          <ValidationMessage color={descriptionColor}>
            {descriptionErrorMessage}
          </ValidationMessage>
        </InputWrapper>
        <InputWrapper>
          <Label color={categoryColor}>Category</Label>
          <UpdatedSelect
            placeholder=" "
            name="category"
            id="category"
            options={categories}
            styles={colorStyles}
            onChange={handleChange}
            onBlur={() => {
              setCategoryDirty(true);
            }}
            required
            pattern="^[a-zA-Z]+$"
            classNamePrefix="Select"
            color={categoryColor}
          />
          <ValidationMessage color={categoryColor}>
            {categoryErrorMessage}
          </ValidationMessage>
        </InputWrapper>
        <InputWrapper>
          <Label color={timeColor}>Cooking time</Label>
          <UpdatedSelect
            placeholder=" "
            options={initialData}
            name="time"
            id="time"
            styles={colorStyles}
            isSearchable={false}
            onChange={handleChange}
            onBlur={() => {
              setTimeDirty(true);
            }}
            required
            pattern="^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$"
            classNamePrefix="Select"
            color={timeColor}
          />
          <ValidationMessage color={timeColor}>
            {timeErrorMessage}
          </ValidationMessage>
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
