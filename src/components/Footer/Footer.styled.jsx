import { Box } from 'components/constants/Container/Container.styled';

const { default: styled } = require('styled-components');

export const FooterSection = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  color: white;
  padding: 64px 100px 50px 100px;
  background-color: #22252a;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LogoGroup = styled.div`
  display: flex;
  min-width: 418px;
  gap: 40px;
  flex-direction: column;
  margin-right: 160px;
`;

export const StyledContainer = styled(Box)`
  padding: 0px;
`;
