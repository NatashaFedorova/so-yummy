import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';

export const UserLogoDiv = styled.div`
  display: flex;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  cursor: pointer;
`;

export const AvatarArea = styled.div`
  display: flex;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #d9d9d9;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  background-position: 50% 50%;
  background-size: cover;

  @media ${device.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const UserNameSpan = styled.p`
  color: ${props => props.theme.colors.header.textMain};
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

  &:hover {
    color: #8baa36 !important;
  }
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 24px;
  }
`;
