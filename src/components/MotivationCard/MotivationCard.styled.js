import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;
  border: 1px solid red;
  z-index: 100;
  width: 500px;
  height: 500px;
  background: #000000;
  background: -webkit-linear-gradient(to right, #0f9b0f, #000000);
  background: linear-gradient(to right, #0f9b0f, #000000);
`;

export const Text = styled.p`
  color: white;
  font-size: 24px;
`;
