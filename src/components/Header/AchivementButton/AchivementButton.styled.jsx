import styled from 'styled-components';
import { GiTrophyCup } from 'react-icons/gi';
import { device } from 'components/constants/deviceType/deviceType';

export const Button = styled.button`
  cursor: pointer;
  display: block;
  padding: 0;
  margin-left: 14px;
  background-color: transparent;
  border: none;

  &.active {
    border: none;
  }

  @media ${device.mobile} {
    width: 34px;
    height: 34px;
  }

  @media ${device.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const GiTrophyCupIcon = styled(GiTrophyCup)`
  color: ${props => props.theme.colors.achivement.accent};
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.15);
  }

  @media ${device.mobile} {
    width: 34px;
    height: 34px;
  }

  @media ${device.tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${props => props.theme.colors.achivement.accent};
`;
