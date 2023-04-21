import Container from 'components/constants/Container';
import { device } from 'components/constants/deviceType/deviceType';

const { default: styled } = require('styled-components');

export const FooterSection = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  color: white;
  padding: 28px 85px 20px 85px;
  background-color: #22252a;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.tablet} {
    padding: 50px 94px 23px 32px;
    justify-content: space-between;
  }

  @media ${device.desktop} {
    padding: 64px 100px 50px 100px;
  }
`;

export const LogoGroup = styled.div`
  display: flex;
  min-width: auto;
  gap: 40px;
  flex-direction: column;
  margin-right: 0;
  margin-bottom: 32px;

  @media ${device.desktop} {
    max-width: 418px;
  }
`;

export const StyledContainer = styled(Container)`
  padding: 0px;
`;
