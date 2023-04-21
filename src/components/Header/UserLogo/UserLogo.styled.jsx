import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import { device } from 'components/constants/deviceType/deviceType';

export const UserLogoDiv = styled.div`
  display: flex;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const AvatarArea = styled.div`
  display: flex;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #d9d9d9;
  align-items: center;
  justify-content: center;

  @media${device.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const CustomUserAvatar = styled(FiUser)`
  color: #c4c4c4;
`;

export const UserNameSpan = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

  @media${device.tablet} {
    font-size: 14px;
    line-height: 24px;
  }
`;
