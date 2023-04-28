import styled from 'styled-components';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { device } from 'components/constants/deviceType/deviceType';

export const BurgerMenuDiv = styled.div`
  margin-left: 27px;
  cursor: pointer;

  @media ${device.tablet} {
    margin-left: 54px;
  }
  @media ${device.desktop} {
    display: none;
  }
`;

export const StyledHiOutlineMenuAlt2 = styled(HiOutlineMenuAlt2)`
  width: 27px;
  height: 27px;
  color: ${props => props.theme.colors.header.mainPageIconColor};

  &:hover {
    color: ${props => props.theme.colors.header.accent} !important;
  }

  @media ${device.tablet} {
    width: 36px;
    height: 36px;
  }
`;
