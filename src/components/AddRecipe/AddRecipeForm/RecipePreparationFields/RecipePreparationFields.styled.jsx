import { size } from 'components/SignPages/SignPages.styled';
import styled from 'styled-components';

export const RecipePreparationFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: ${size.tablet}) {
    gap: 32px;
  }
`;

export const SubmitButtom = styled.button`
  cursor: pointer;
  display: block;
  padding: 12px 48px;
  color: ${props => props.theme.colors.addRecipePage.iconDefaultImage};
  background-color: ${props => props.theme.colors.addRecipePage.bgBtnAdd};
  border-radius: 24px 44px;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props =>
      props.theme.colors.addRecipePage.bgBtnAddHover};
  }

  @media screen and (min-width: ${size.tablet}) {
    padding: 14px 64px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 154px;
  padding: 16px 10px;
  resize: none;

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontSizes.regular};
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.addRecipePage.textForm};

  background: ${props => props.theme.colors.addRecipePage.bgInputTextArea};
  border-radius: 6px;
  border-color: transparent;

  &::placeholder {
    font-size: ${props => props.theme.fontSizes.s};
    color: ${props => props.theme.colors.addRecipePage.placeholderForm};
  }

  @media screen and (min-width: ${size.tablet}) {
    width: 505px;
    height: 224px;
    padding: 16px 22px;

    font-size: ${props => props.theme.fontSizes.l};

    &::placeholder {
      font-size: ${props => props.theme.fontSizes.l};
    }
  }
`;
