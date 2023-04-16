import styled from 'styled-components';
import { DefaultBtn } from 'components/constants/DefaultBtn.styled';

export const Btn = styled(DefaultBtn)`
  cursor: pointer;
  display: block;
  padding: 23px 52px;
  background-color: ${props => props.theme.colors.startPage.bgBtnRegistration};
  color: ${props => props.theme.colors.startPage.textButton};
  border-radius: 24px 44px;
  border-color: ${props => props.theme.colors.startPage.borderBtnRegistration};
`;
