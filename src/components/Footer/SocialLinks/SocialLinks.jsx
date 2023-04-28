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
          <StyledBsFacebook aria-label="Facebook link" />
        </LinkIcon>
      </li>
      <li>
        <LinkIcon>
          <StyledBsYoutube aria-label="Youtube link" />
        </LinkIcon>
      </li>
      <li>
        <LinkIcon>
          <StyledBsTwitter aria-label="Twitter link" />
        </LinkIcon>
      </li>
      <li>
        <LinkIcon>
          <StyledBsInstagram aria-label="Instagram link" />
        </LinkIcon>
      </li>
    </SocialLinksList>
  );
};
