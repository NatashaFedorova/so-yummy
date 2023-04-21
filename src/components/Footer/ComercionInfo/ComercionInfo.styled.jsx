import { device } from 'components/constants/deviceType/deviceType';
import { Link } from 'react-router-dom/dist';
import styled from 'styled-components';

export const StyledCommercionInfo = styled.div`
  display: flex;
  height: 115px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: #22252a;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.01em;
  text-align: left;

  @media${device.tablet} {
    font-weight: 500;
    line-height: 14px;
  }
  @media${device.desktop} {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
  }
`;

export const StyledLink = styled(Link)`
  color: #22252a;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.01em;
  text-align: left;

  @media${device.tablet} {
    font-weight: 500;
    line-height: 14px;
  }
  @media${device.desktop} {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
  }
`;
