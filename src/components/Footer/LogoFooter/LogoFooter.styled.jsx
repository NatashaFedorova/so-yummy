import styled from 'styled-components';
import { GrCafeteria } from 'react-icons/gr';
import { device } from 'components/constants/deviceType/deviceType';

export const LogoSvg = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #ebf3d4;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    height: 44px;
    width: 44px;
    border-radius: 12px;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  color: white;
  cursor: context-menu;
`;

export const LogoTitle = styled.h2`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.015em;
  text-align: left;

  @media ${device.tablet} {
    font-family: Poppins;
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.015em;
  }
`;

export const StyledGrCafeteria = styled(GrCafeteria)`
  width: 25px;
  height: 25px;
  & path {
    stroke: #8baa36;
  }
`;
