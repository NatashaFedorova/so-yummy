import DefaultBtn from 'components/constants/DefaultBtn';
import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalUser = styled.div`
  position: absolute;
  z-index: 5;

  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #8baa36;

  top: 78px;
  right: 15vw;

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;

  & button:first-child {
    border: none;
    background-color: white;
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
  }

  @media${device.tablet} {
    right: 20vw;
    border-color: transparent;
  }

  @media${device.desktop} {
    right: 20vw;
  }
`;

export const StyledLogoutBtn = styled(DefaultBtn)`
  display: flex;
  align-items: center;
  background-color: #8baa36;
  color: white;
  padding: 12px 32px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;

  &:hover {
    color: black;
  }
`;
