import styled from 'styled-components';
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';

export const SocialLinksList = styled.ul`
  display: flex;
  padding-top: 40px;
  gap: 18px;
  width: 100%;
  justify-content: center;
`;

export const StyledBsFacebook = styled(BsFacebook)`
  width: 25px;
  height: 25px;
  & path {
    fill: #8baa36;
  }
`;

export const StyledBsYoutube = styled(BsYoutube)`
  width: 25px;
  height: 25px;
  & path {
    fill: #8baa36;
  }
`;

export const StyledBsTwitter = styled(BsTwitter)`
  width: 25px;
  height: 25px;
  & path {
    fill: #8baa36;
  }
`;

export const StyledBsInstagram = styled(BsInstagram)`
  width: 25px;
  height: 25px;
  & path {
    fill: #8baa36;
  }
`;
