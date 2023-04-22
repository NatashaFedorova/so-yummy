import Container from 'components/constants/Container';
import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-top: 27px;
  padding-left: 16px;
  padding-right: 16px;

  @media ${device.tablet} {
    padding-top: 18px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${device.desktop} {
    padding-right: 210px;
  }
`;

export const HeaderRightDiv = styled.div`
  display: flex;
  align-items: center;
`;
