import styled from 'styled-components';
import { device, size } from '../deviceType/deviceType';

const Container = styled.div`
  margin: 0 auto;
  @media ${device.mobile} {
    width: ${size.mobile};
    padding: 0 ${props => props.theme.spacing(4)};
  }
  @media ${device.tablet} {
    width: ${size.tablet};
    padding: 0 ${props => props.theme.spacing(8)};
  }
  @media ${device.desktop} {
    width: ${size.desktop};
    padding: 0 ${props => props.theme.spacing(25)};
  }
`;

export default Container;
