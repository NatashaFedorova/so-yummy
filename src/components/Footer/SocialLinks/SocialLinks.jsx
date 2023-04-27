import {
  LinkIcon,
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
        <LinkIcon>
          <StyledBsFacebook />
        </LinkIcon>
      </li>
      <li>
        <LinkIcon>
          <StyledBsYoutube />
        </LinkIcon>
      </li>
      <li>
        <LinkIcon>
          <StyledBsTwitter />
        </LinkIcon>
      </li>
      <li>
        <LinkIcon>
          <StyledBsInstagram />
        </LinkIcon>
      </li>
    </SocialLinksList>
  );
};
