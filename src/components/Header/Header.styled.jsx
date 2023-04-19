import { Box } from 'components/constants/Container/Container.styled';

const { default: styled } = require('styled-components');

export const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-right: 210px;
  padding-top: 18px;
`;
