import Container from 'components/constants/Container';

const { default: styled } = require('styled-components');

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-right: 210px;
  padding-top: 18px;
`;
