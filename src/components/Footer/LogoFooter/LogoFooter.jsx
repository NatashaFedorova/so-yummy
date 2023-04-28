import {
  LogoDiv,
  LogoSvg,
  LogoTitle,
  StyledGrCafeteria,
} from './LogoFooter.styled';

export const LogoFooter = () => {
  return (
    <LogoDiv>
      <LogoSvg>
        <StyledGrCafeteria />
      </LogoSvg>
      <LogoTitle>So yummy</LogoTitle>
    </LogoDiv>
  );
};
