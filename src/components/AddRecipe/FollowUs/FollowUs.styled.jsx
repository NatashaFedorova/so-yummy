import styled from 'styled-components';
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';
import { size } from 'components/constants/deviceType/deviceType';

export const FollowUsWrapper = styled.div`
  display: none;

  @media screen and (min-width: ${size.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const SocialLinksList = styled.ul`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: flex-start;
`;

export const StyledBsFacebook = styled(BsFacebook)`
  width: 25px;
  height: 25px;

  & path {
    fill: ${props => props.theme.colors.addRecipePage.socIcon};
    transition: fill 250ms ease-in-out;
  }

  &:hover {
    & path {
      fill: ${props => props.theme.colors.addRecipePage.socIconHover};
    }
  }
`;

export const StyledBsYoutube = styled(BsYoutube)`
  width: 25px;
  height: 25px;
  & path {
    fill: ${props => props.theme.colors.addRecipePage.socIcon};
    transition: fill 250ms ease-in-out;
  }

  &:hover {
    & path {
      fill: ${props => props.theme.colors.addRecipePage.socIconHover};
    }
  }
`;

export const StyledBsTwitter = styled(BsTwitter)`
  width: 25px;
  height: 25px;
  & path {
    fill: ${props => props.theme.colors.addRecipePage.socIcon};
    transition: fill 250ms ease-in-out;
  }

  &:hover {
    & path {
      fill: ${props => props.theme.colors.addRecipePage.socIconHover};
    }
  }
`;

export const StyledBsInstagram = styled(BsInstagram)`
  width: 25px;
  height: 25px;
  & path {
    fill: ${props => props.theme.colors.addRecipePage.socIcon};
    transition: fill 250ms ease-in-out;
  }

  &:hover {
    & path {
      fill: ${props => props.theme.colors.addRecipePage.socIconHover};
    }
  }
`;
