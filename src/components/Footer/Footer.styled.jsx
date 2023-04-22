import styled from 'styled-components';
import Container from 'components/constants/Container';
import { device } from 'components/constants/deviceType/deviceType';

export const BoxUp = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.footer.bgSection};
  z-index: 1;
`;

export const BoxDown = styled.div``;

export const StyledContainerUp = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  color: white;
  padding: 28px 85px 20px 85px;

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
export const StyledContainerDown = styled(Container)``;

export const LogoGroup = styled.div`
  display: flex;
  min-width: auto;
  gap: 40px;
  flex-direction: column;
  margin-right: 0;
  margin-bottom: 32px;

  @media ${device.tablet} {
    margin-bottom: 0;
    margin-right: 175px;
  }
  @media ${device.desktop} {
    max-width: 418px;
    margin-right: 152px;
  }
`;
