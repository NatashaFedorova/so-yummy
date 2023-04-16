import styled from 'styled-components';

export const Background = styled.div`
  min-height: 100vh;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  /* color: transparent */
`;
