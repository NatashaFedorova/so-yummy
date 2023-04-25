import styled from 'styled-components';
import { GrCafeteria } from 'react-icons/gr';
import { device } from 'components/constants/deviceType/deviceType';

export const LogoSvg = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: #8baa36;
  align-items: center;
  justify-content: center;

  @media${device.tablet} {
    width: 44px;
    height: 44px;
  } ;
`;

export const StyledGrCafeteria = styled(GrCafeteria)`
  width: 28px;
  height: 28px;
  & path {
    stroke: white;
  }
  @media${device.tablet} {
    width: 30px;
    height: 30px;
  }
  @media${device.desktop} {
    width: 25px;
    height: 25px;
  }
`;
