import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';

export const Box = styled.div`
  width: 50px;
  display: flex;
  z-index: 5000;
  position: absolute;
  justify-content: center;
  @media ${device.mobile} {
    top: -11px;
    right: -6px;
    height: 45px;
    background: rgba(42, 44, 54);
  }
  @media ${device.tablet} {
    top: -3px;
    right: 2px;
    height: 50px;
    background: rgba(139, 170, 54, 0);
  }
  @media ${device.desktop} {
    top: -3px;
    right: 2px;
    height: 50px;
    background: rgba(139, 170, 54, 0);
  }
`;
