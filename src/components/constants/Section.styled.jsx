import styled from 'styled-components';
import { device } from './deviceType/deviceType';
const Section = styled.section`
  @media ${device.mobile} {
    padding: 16px 0;
  }
  @media ${device.tablet} {
    padding: 32px 0;
  }
  @media ${device.desktop} {
    padding: 100px 0;
  }
`;

export default Section;
