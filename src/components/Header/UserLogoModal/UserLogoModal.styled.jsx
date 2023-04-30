import DefaultBtn from 'components/constants/DefaultBtn';
import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
`;

export const ModalUser = styled.div`
  position: absolute;
  z-index: 5;

  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.modal.bg} !important;
  color: ${props => props.theme.colors.modal.text} !important;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #8baa36;

  top: 78px;
  right: 15vw;

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;

  @media${device.tablet} {
    right: 25vw;
    border-color: transparent;
  }

  @media${device.desktop} {
    right: 22vw;
  }
`;

export const ChangeUserButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.modal.textForm} !important;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    color: #8baa36 !important;
  }
`;

export const StyledLogoutBtn = styled(DefaultBtn)`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.modal.bgBtn} !important;
  color: ${props => props.theme.colors.modal.textBtn} !important;
  padding: 12px 32px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;

  &:hover {
    color: #22252a !important;
  }
`;
