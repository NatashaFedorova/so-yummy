import { device, size } from 'components/constants/deviceType/deviceType';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WelcomePageSection = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('${process.env.PUBLIC_URL}/images/welcomePage/bg1.webp');
`;
export const WelcomePageContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media ${device.mobile} {
    width: ${size.mobile};
  }

  @media ${device.tablet} {
    width: ${size.tablet};
    padding: 0 134px;
  }

  @media ${device.desktop} {
    width: ${size.desktop};
  }
`;
export const WelcomePageBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const WelcomePageLogo = styled.img`
  width: 54px;
  height: 54px;
  margin-bottom: 28px;

  background: #8baa36;
  border-radius: 12px;

  @media ${device.tablet} {
    width: 68px;
    height: 68px;
    margin-bottom: 44px;
  }
`;
export const WelcomePageTitle = styled.h1`
  width: 247px;
  height: 24px;

  margin-bottom: 14px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: ${props => props.theme.colors.welcomePage.title};

  @media ${device.tablet} {
    width: 288px;
    height: 35px;
    font-size: 28px;
  }
`;
export const WelcomePageText = styled.p`
  width: 305px;
  height: 72px;
  margin-bottom: 44px;

  font-size: 14px;
  line-height: 1.29;

  text-align: center;
  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.welcomePage.text};

  @media ${device.tablet} {
    width: 505px;
    margin-bottom: 38px;

    font-size: 18px;
    line-height: 1.33;
  }

  @media ${device.desktop} {
    width: 540px;
    margin-bottom: 40px;
  }
`;
export const WelcomePageNavList = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${device.tablet} {
    gap: 18px;
  }
`;
export const WelcomePageNavLinkRegister = styled(NavLink)`
  display: inline-block;
  padding: 12px 24px;

  font-size: 14px;
  line-height: 21px;
  color: ${props => props.theme.colors.welcomePage.textButton};

  border-radius: 24px 44px;
  border-color: ${props => props.theme.colors.welcomePage.borderBtnRegistration};
  background-color: ${props => props.theme.colors.welcomePage.bgBtnRegistration};
  cursor: pointer;

  &:hover, :focus {
    background-color: #22252A;
  }

  @media ${device.tablet} {
    padding: 22px 44px;

    font-size: 16px;
    line-height: 24px;
  }
`;
export const WelcomePageNavLinkLogin = styled(WelcomePageNavLinkRegister)`
  background-color: ${props => props.theme.colors.welcomePage.bgBtnSignIn};
  border-color: ${props => props.theme.colors.welcomePage.borderBtnSignIn};
  border: 2px solid;

  &:hover, :focus {
    color: #8BAA36;
    background-color: ${props => props.theme.colors.welcomePage.borderBtnSignIn};
    border-color: ${props => props.theme.colors.welcomePage.borderBtnSignIn};
  }
`;
