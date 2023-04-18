import styled from 'styled-components';

const DefaultBtn = styled.button`
  cursor: pointer;
  display: block;
  padding: 23px 52px;
  color: #fafafa;
  border-radius: 24px 44px;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export default DefaultBtn;
