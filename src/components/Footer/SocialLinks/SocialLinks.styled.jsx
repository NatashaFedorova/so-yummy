import styled from 'styled-components';
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';
import { device } from 'components/constants/deviceType/deviceType';

export const SocialLinksList = styled.ul`
  display: flex;
  padding-top: 43px;
  gap: 18px;
  width: 100%;
  justify-content: center;
  @media ${device.tablet} {
    padding-left: 62px;
  }
  @media ${device.desktop} {
    padding-top: 40px;
  }
`;

export const StyledBsFacebook = styled(BsFacebook)`
  width: 25px;
  height: 25px;
  & path {
    fill: #8baa36;
  }

  @media ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const StyledBsYoutube = styled(BsYoutube)`
  width: 25px;
  height: 25px;
  & path {
    fill: #8baa36;
  }
  @media ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const StyledBsTwitter = styled(BsTwitter)`
  width: 20px;
  height: 20px;
  & path {
    fill: #8baa36;
  }
  @media ${device.tablet} {
    width: 25px;
    height: 25px;
  }
`;

export const StyledBsInstagram = styled(BsInstagram)`
  width: 20px;
  height: 20px;
  & path {
    fill: #8baa36;
  }
  @media ${device.tablet} {
    width: 25px;
    height: 25px;
  }
`;
