import styled from 'styled-components';
import Select from 'react-select';
import { BsDropletFill } from 'react-icons/bs';

import { size } from 'components/constants/deviceType/deviceType';

export const RecipeDescrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: ${size.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: ${size.desktop}) {
    gap: 50px;
  }
`;

export const PictureThumb = styled.div`
  display: flex;
  position: relative;
  padding: 0 0 268px 279px;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.addRecipePage.bdUnderImage};
  cursor: pointer;
  opacity: 1;

  transition: opacity 250ms ease-in-out;

  @media screen and (min-width: ${size.desktop}) {
    width: 357px;
    padding: 0 0 344px 357px;
  }

  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  &::after {
    content: ' ';
    width: 64px;
    height: 64px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M56.381 22.8571V13.696C56.3811 12.0826 55.7414 10.535 54.6023 9.39244C53.4631 8.24988 51.9175 7.60557 50.3041 7.60073L41.143 7.5733M56.381 41.1428V50.2857C56.381 51.9022 55.7389 53.4526 54.5958 54.5957C53.4527 55.7387 51.9024 56.3809 50.2858 56.3809H41.143M22.8572 7.5733L13.6961 7.60378C12.0827 7.60862 10.5371 8.25293 9.39792 9.39549C8.2588 10.538 7.61913 12.0856 7.61914 13.699V22.8571M22.8572 56.3809H13.7144C12.0978 56.3809 10.5475 55.7387 9.40439 54.5957C8.26132 53.4526 7.61914 51.9022 7.61914 50.2857V41.1428' stroke='%23FAFAFA' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M32 37.5C33.25 37.5 34.3127 37.0627 35.188 36.188C36.0627 35.3127 36.5 34.25 36.5 33C36.5 31.75 36.0627 30.6873 35.188 29.812C34.3127 28.9373 33.25 28.5 32 28.5C30.75 28.5 29.6873 28.9373 28.812 29.812C27.9373 30.6873 27.5 31.75 27.5 33C27.5 34.25 27.9373 35.3127 28.812 36.188C29.6873 37.0627 30.75 37.5 32 37.5ZM24 41C23.45 41 22.9793 40.8043 22.588 40.413C22.196 40.021 22 39.55 22 39V27C22 26.45 22.196 25.9793 22.588 25.588C22.9793 25.196 23.45 25 24 25H27.15L29 23H35L36.85 25H40C40.55 25 41.021 25.196 41.413 25.588C41.8043 25.9793 42 26.45 42 27V39C42 39.55 41.8043 40.021 41.413 40.413C41.021 40.8043 40.55 41 40 41H24Z' fill='%23FAFAFA'/%3e%3c/svg%3e ");
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const FileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 343px;

  @media screen and (min-width: ${size.tablet}) {
    width: 393px;
    gap: 32px;
  }

  @media screen and (min-width: ${size.desktop}) {
    gap: 40px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;

  @media screen and (min-width: ${size.tablet}) {
    height: 43px;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 100%;
  padding-bottom: 19px;

  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeight.regular};
  line-height: 1;
  text-align: right;
  color: ${props => props.theme.colors.addRecipePage.textForm};

  border-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.addRecipePage.line};

  transition: border-bottom-color 250ms ease-in-out;

  @media screen and (min-width: ${size.tablet}) {
    padding-bottom: 18px;
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const UpdatedSelect = styled(Select)`
  width: 100%;
  height: 100%;
  padding-bottom: 19px;

  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeight.regular};
  line-height: 1;
  text-align: right;

  background-color: transparent;

  border-bottom-color: ${props => props.theme.colors.addRecipePage.line};
  border-bottom-style: solid;
  border-bottom-width: 1px;

  transition: border-bottom-color 250ms ease-in-out;

  & path {
    fill: ${props => props.theme.colors.addRecipePage.socIcon};
  }

  @media screen and (min-width: ${size.tablet}) {
    font-size: ${props => props.theme.fontSizes.s};
    padding-bottom: 18px;
  }

  & .Select__control {
    cursor: pointer;
  }

  & .Select__single-value {
    text-align: right;
    color: ${props => props.theme.colors.addRecipePage.textForm};
  }

  & .Select__input-container {
    margin: 0 auto;
    color: ${props => props.theme.colors.addRecipePage.textForm};
  }

  & .Select__menu {
    background-color: ${props => props.theme.colors.addRecipePage.optionMenuBg};
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    padding: 8px 4px 8px 18px;

    &-list::-webkit-scrollbar {
      width: 6px;
      height: 0;
    }
    &-list::-webkit-scrollbar-track {
      background: transparent;
    }
    &-list::-webkit-scrollbar-thumb {
      background-color: ${props =>
        props.theme.colors.addRecipePage.scrollBarBgColor};
      border-radius: 12px;

      transition: background-color 250ms ease-in-out;
    }
    &-list::-webkit-scrollbar-thumb:hover {
      background-color: ${props => props.theme.colors.addRecipePage.socIcon};
    }
  }

  & .Select__option {
    text-align: left;
    color: ${props => props.theme.colors.addRecipePage.placeholderForm};
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeight.regular};
    line-height: 1.5;
    cursor: pointer;

    @media screen and (min-width: ${size.tablet}) {
      font-size: ${props => props.theme.fontSizes.s};
    }

    &--is-selected {
      background-color: transparent;
      color: ${props => props.theme.colors.addRecipePage.socIcon};
    }

    &--is-focused {
      background-color: transparent;
    }

    &:hover {
      background-color: transparent;
      color: ${props => props.theme.colors.addRecipePage.socIcon};
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeight.regular};
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.addRecipePage.labelForm};

  @media screen and (min-width: ${size.tablet}) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const ModalTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: 1.5;
  color: ${props => props.theme.colors.addRecipePage.textForm};
`;

export const ModalText = styled.p`
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: 1.5;
  color: ${props => props.theme.colors.addRecipePage.textForm};
`;

export const ModalIcon = styled(BsDropletFill)`
  width: 44px;
  height: 44px;

  & path {
    fill: ${props => props.theme.colors.addRecipePage.socIcon};
  }
`;

export const BrowseButton = styled.button`
  cursor: pointer;
  display: block;
  padding: 12px 48px;
  color: ${props => props.theme.colors.addRecipePage.iconDefaultImage};
  background-color: ${props => props.theme.colors.addRecipePage.bgBtnAdd};
  border-radius: 24px 44px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.addRecipePage.textareaBorder};

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
