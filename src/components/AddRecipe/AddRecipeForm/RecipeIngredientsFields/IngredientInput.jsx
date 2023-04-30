import React, { useState, useRef } from 'react';

import DropDown from './DropDown';
import {
  DropdownIcon,
  SmallInput,
  SmallInputWrapper,
} from './RecipeIngredientsFields.styled';

const IngredientInput = ({
  ingredients,
  id,
  onChange,
  onBlur,
  value,
  color,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const clickHandler = () => {
    if (!isOpen) {
      setIsOpen(true);
      inputRef.current.focus();
    } else {
      setIsOpen(false);
      inputRef.current.blur();
    }
  };

  const changeHandler = event => {
    onChange(event.target.id, event.target.value);
  };

  const quantityClickHandler = event => {
    event.stopPropagation();
    const prop = ingredients.find(item => item.id === event.target.id).value;
    let inputValue = inputRef.current.value.toString();

    if (
      ingredients.some(item => {
        return inputValue.includes(item.value);
      })
    ) {
      let inputValuesArray = inputValue.split(' ');
      const valueIndex = inputValuesArray.findIndex(item =>
        item.includes(prop)
      );

      if (valueIndex === -1) {
        inputValuesArray.splice(valueIndex, 1, prop);
        inputValue = inputValuesArray.join(' ');
      } else {
        inputValue = inputValuesArray.join(' ');
      }
    } else {
      inputValue = inputRef.current.value + ' ' + prop;
    }

    inputRef.current.value = inputValue;
    onChange(event.target.closest('ul').id, inputValue);
    closeDropdown();
  };

  return (
    <SmallInputWrapper>
      <SmallInput
        onBlur={onBlur}
        onChange={changeHandler}
        value={value}
        ref={inputRef}
        id={id}
        type="text"
        placeholder="1 kg"
        required
        pattern="^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$"
        color={color}
      />
      <DropdownIcon onClick={clickHandler} />
      {isOpen && (
        <DropDown
          id={id}
          isOpen={isOpen}
          ingredients={ingredients}
          quantityClickHandler={quantityClickHandler}
          closeDropdown={closeDropdown}
        />
      )}
    </SmallInputWrapper>
  );
};

export default IngredientInput;
