import { Link } from 'react-router-dom/dist';
import {
  FollowUsWrapper,
  SocialLinksList,
  StyledBsFacebook,
  StyledBsInstagram,
  StyledBsTwitter,
  StyledBsYoutube,
} from './FollowUs.styled';
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';

const FollowUs = () => {
  return (
    <FollowUsWrapper>
      <SecondaryTitle>Follow us</SecondaryTitle>
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
    </FollowUsWrapper>
  );
};

export default FollowUs;
