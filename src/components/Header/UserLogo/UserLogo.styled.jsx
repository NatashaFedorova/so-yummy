import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

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
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #d9d9d9;
  align-items: center;
  justify-content: center;
`;

export const CustomUserAvatar = styled(FiUser)`
  color: #c4c4c4;
`;
