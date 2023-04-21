import { device } from 'components/constants/deviceType/deviceType';
import { Link } from 'react-router-dom/dist';
import styled from 'styled-components';

export const StyledCommercionInfo = styled.div`
  display: flex;
  height: 66px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: #22252a;

  @media ${device.tablet} {
    height: 92px;
  }

  @media ${device.desktop} {
    height: 114px;
  }
`;

export const StyledLink = styled(Link)`
  color: #22252a;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.01em;
`;
