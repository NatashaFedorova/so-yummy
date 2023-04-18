import styled from 'styled-components';
import { device } from '../deviceType/deviceType';

const Container = styled.div`
  margin: 0 auto;

  @media ${device.mobile} {
    width: 320px;
    padding: 0 16px;
  }

  @media ${device.tablet} {
    width: 768px;
    padding: 0 32px;
  }

  @media ${device.desktop} {
    width: 1440px;
    padding: 0 100px;
  }
`;

export default Container;
