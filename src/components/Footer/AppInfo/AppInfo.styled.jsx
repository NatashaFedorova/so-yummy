import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const AppInfoList = styled.ul`
  display: none;
  @media ${device.tablet} {
    display: flex;
    gap: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
    width: auto;
    flex-direction: column;
    list-style-type: disc;
    padding-left: 18px;
  }

  @media ${device.desktop} {
    size: 18px;
    gap: 12px;
    width: 418px;
  }
`;
