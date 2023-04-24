import Container from 'components/constants/Container';
import styled from 'styled-components';

export const HeaderS = styled.header`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 10;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
`;

export const HeaderRightDiv = styled.div`
  display: flex;
  align-items: center;
`;
