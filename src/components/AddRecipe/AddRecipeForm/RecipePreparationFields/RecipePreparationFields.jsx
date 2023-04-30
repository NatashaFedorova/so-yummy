import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SecondaryTitle from 'components/AddRecipe/SecondaryTitle/SecondaryTitle';
import { selectMyRecipesIsLoading } from 'redux/myRecipes/myRecipesSelectors';
import {
  validationColors,
  validationMessages,
} from 'components/AddRecipe/helpers/vars';
import {
  RecipePreparationFieldsWrapper,
  SubmitButton,
  Textarea,
  ValidationMessage,
} from './RecipePreparationFields.styled';

const RecipePreparationFields = ({
  value,
  onChange,
  isValid,
  preparationFieldsValidationStatusSetter,
}) => {
  const [textareaDirty, setTextareaDirty] = useState(false);
  const [textareaErrorMessage, setTextareaErrorMessage] = useState(null);
  const [textareaColor, setTextareaColor] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const submitBtn = useRef(null);
  const isAdding = useSelector(selectMyRecipesIsLoading);

  useEffect(() => {
    if (!isValid || isAdding) {
      submitBtn.current.setAttribute('disabled', true);
      setIsDisabled(true);
    }
    if (isValid && !isAdding) {
      submitBtn.current.removeAttribute('disabled');
      setIsDisabled(false);
    }
  }, [isValid, isAdding]);

  useEffect(() => {
    if (!textareaDirty && value.length === 0) {
      setTextareaErrorMessage(validationMessages.required.message);
    }

    if (textareaDirty && textareaErrorMessage) {
      setTextareaColor(validationColors.error);
    } else if (textareaDirty && value.length === 0) {
      setTextareaColor(validationColors.error);
    } else {
      setTextareaColor(null);
    }
  }, [textareaDirty, textareaErrorMessage, value]);

  useEffect(() => {
    const isFormDataEmpty = !Boolean(value);
    const isFormDataValid = !Boolean(textareaErrorMessage);
    const isTrue = !isFormDataEmpty && isFormDataValid;
    preparationFieldsValidationStatusSetter(isTrue);
  }, [value, textareaErrorMessage, preparationFieldsValidationStatusSetter]);

  const blurHandler = event => {
    setTextareaDirty(true);

    if (value.length === 0) {
      setTextareaErrorMessage(validationMessages.required.message);
    } else {
      setTextareaErrorMessage(null);
    }
  };

  const changeHandler = event => {
    onChange(event);

    if (value.length === 0) {
      setTextareaErrorMessage(validationMessages.required.message);
    } else {
      setTextareaErrorMessage(null);
    }
  };

  return (
    <RecipePreparationFieldsWrapper>
      <SecondaryTitle>Recipe Preparation</SecondaryTitle>
      <Textarea
        onChange={changeHandler}
        value={value.join('\n')}
        name="preparation"
        cols="30"
        rows="10"
        placeholder="Enter recipe"
        required
        color={textareaColor}
        onBlur={blurHandler}
      ></Textarea>
      <SubmitButton isDisabled={isDisabled} ref={submitBtn} type="submit">
        {isAdding ? 'Adding...' : 'Add'}
      </SubmitButton>
      <ValidationMessage color={textareaColor}>
        {textareaErrorMessage}
      </ValidationMessage>
    </RecipePreparationFieldsWrapper>
  );
};

export default RecipePreparationFields;
