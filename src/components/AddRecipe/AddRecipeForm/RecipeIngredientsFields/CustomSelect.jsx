import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import IngredientInput from './IngredientInput';

import {
  quantities,
  validationColors,
  validationMessages,
} from 'components/AddRecipe/helpers/vars';
import { selectIngredients } from 'redux/recipes/selectors/addRecipeSelectors';

import {
  InputValidationMessage,
  NewSelect,
  SelectValidationMessage,
  SelectWrapper,
} from './RecipeIngredientsFields.styled';

export const colorStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    borderRadius: 6,
    height: '100%',
    boxShadow: isFocused ? 0 : 0,
    '&:hover': {},
  }),
  indicatorSeparator: styles => ({ ...styles, backgroundColor: 'transparent' }),
  indicatorContainer: styles => ({
    ...styles,
    color: '#8BAA36',
  }),
  option: styles => {
    return {
      ...styles,
      lineHeight: 1.5,
    };
  },
  noOptionsMessage: base => ({ ...base, color: '#000', textAlign: 'center' }),
};

const CustomSelect = ({
  handleChange,
  changeHandler,
  id,
  quantity,
  ingredient,
}) => {
  const [selectDirty, setSelectDirty] = useState(false);
  const [inputDirty, setInputDirty] = useState(false);

  const [selectErrorMessage, setSelectErrorMessage] = useState(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(null);

  const [selectColor, setSelectColor] = useState(null);
  const [inputColor, setInputColor] = useState(null);

  const initialOption = useSelector(selectIngredients);

  useEffect(() => {
    if (inputDirty && inputErrorMessage) {
      setInputColor(validationColors.error);
    } else if (inputDirty && quantity.trim().lenght === 0) {
      setInputColor(validationColors.error);
    } else {
      setInputColor(null);
    }
  }, [inputDirty, inputErrorMessage, quantity]);

  useEffect(() => {
    if (selectDirty) {
      if (ingredient.length === 0) {
        setSelectErrorMessage(validationMessages.required.message);
      } else {
        setSelectErrorMessage(null);
      }
    }

    if (selectDirty && selectErrorMessage) {
      setSelectColor(validationColors.error);
    } else {
      setSelectColor(null);
    }
  }, [selectDirty, selectErrorMessage, ingredient]);

  const blurHandler = event => {
    setInputDirty(true);
    if (event.target.value.trim().length === 0) {
      setInputErrorMessage(validationMessages.required.message);
    }
  };

  const inputChangeHandler = (name, value) => {
    const regExp = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

    changeHandler(name, value);

    if (value.trim().length === 0) {
      setInputErrorMessage(validationMessages.required.message);
    } else {
      if (!regExp.test(value.trim().toLowerCase())) {
        setInputErrorMessage(validationMessages.wrongExtention.message);
      } else if (value.trim().length > 20) {
        setInputErrorMessage(validationMessages.toLimit.message);
      } else {
        setInputErrorMessage(null);
      }
    }
  };

  return (
    <SelectWrapper>
      <NewSelect
        onChange={handleChange}
        onBlur={() => setSelectDirty(true)}
        placeholder="ingredient"
        id={id}
        type="text"
        name={id}
        options={initialOption}
        styles={colorStyles}
        required
        pattern="^[a-zA-Z]+$"
        classNamePrefix="Select"
        color={selectColor}
      />
      <IngredientInput
        value={quantity}
        onChange={inputChangeHandler}
        onBlur={blurHandler}
        ingredients={quantities}
        id={id}
        color={inputColor}
      />
      <SelectValidationMessage color={selectColor}>
        {selectErrorMessage}
      </SelectValidationMessage>
      <InputValidationMessage color={inputColor}>
        {inputErrorMessage}
      </InputValidationMessage>
    </SelectWrapper>
  );
};

export default CustomSelect;
