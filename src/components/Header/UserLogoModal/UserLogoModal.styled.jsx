import DefaultBtn from 'components/constants/DefaultBtn';
import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const ModalUser = styled.div`
  position: absolute;
  z-index: 500;

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
    right: 25vw;
  }

  @media${device.desktop} {
    right: 35vw;
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
