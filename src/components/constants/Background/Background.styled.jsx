import styled from 'styled-components';

const Box = styled.div`
  min-height: 100vh;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  background: rgb(35, 38, 42);
`;
export default Box;
