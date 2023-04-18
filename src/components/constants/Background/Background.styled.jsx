import styled from 'styled-components';

const Background = styled.div`
  min-height: 100vh;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
`;
export default Background;
