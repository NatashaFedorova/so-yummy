import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';

export const Box = styled.div`
  width: 50px;
  display: flex;
  z-index: 5000;
  background: rgba(139, 170, 54, 0);
  position: absolute;
  justify-content: center;
  @media ${device.mobile} {
    top: -11px;
    right: -6px;
    height: 45px;
  }
  @media ${device.tablet} {
    top: -3px;
    right: 2px;
    height: 50px;
  }
  @media ${device.desktop} {
    top: -3px;
    right: 2px;
    height: 50px;
  }
`;
