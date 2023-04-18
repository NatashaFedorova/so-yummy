import { Link } from 'react-router-dom/dist';
import {
  SocialLinksList,
  StyledBsFacebook,
  StyledBsInstagram,
  StyledBsTwitter,
  StyledBsYoutube,
} from './SocialLinks.styled';

export const SocialLinks = () => {
  return (
    <SocialLinksList>
      <li>
        <Link>
          <StyledBsFacebook />
        </Link>
      </li>
      <li>
        <Link>
          <StyledBsYoutube />
        </Link>
      </li>
      <li>
        <Link>
          <StyledBsTwitter />
        </Link>
      </li>
      <li>
        <Link>
          <StyledBsInstagram />
        </Link>
      </li>
    </SocialLinksList>
  );
};
