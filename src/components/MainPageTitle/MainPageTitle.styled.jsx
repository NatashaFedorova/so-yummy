import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';

export const MainTitle = styled.h1`
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.02em;
  @media ${device.mobile} {
    font-size: 28px;
  }
  @media ${device.tablet} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 44px;
  }
`;
