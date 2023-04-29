import styled from 'styled-components';
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';
import { device } from 'components/constants/deviceType/deviceType';
import { Link } from 'react-router-dom';

export const SocialLinksList = styled.ul`
  display: flex;
  padding-top: 43px;
  gap: 18px;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    padding-left: 62px;
  }
  @media ${device.desktop} {
    padding-top: 40px;
  }

  & a {
    display: flex;
    align-items: center;
  }
`;

export const LinkIcon = styled(Link)`
  color: ${props => props.theme.colors.userForm.icon};
  &:hover {
    color: ${props => props.theme.colors.userForm.iconHover};
  }
`;

export const StyledBsFacebook = styled(BsFacebook)`
  width: 18px;
  height: 18px;

  @media ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const StyledBsYoutube = styled(BsYoutube)`
  width: 24px;
  height: 19px;

  @media ${device.tablet} {
    width: 25px;
    height: 20px;
  }
`;

export const StyledBsTwitter = styled(BsTwitter)`
  width: 23px;
  height: 19px;

  @media ${device.tablet} {
    width: 25px;
    height: 21px;
  }
`;

export const StyledBsInstagram = styled(BsInstagram)`
  width: 17px;
  height: 17px;

  @media ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;
