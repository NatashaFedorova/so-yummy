import styled from 'styled-components';

export const DefaultBtn = styled.button`
  cursor: pointer;
  display: block;
  padding: 23px 52px;
  color: #fafafa;
  border: 1px solid #22252a;
  border-radius: 24px 44px;
  background-color: #22252a;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: #8baa36;
    background-color: #8baa36;
  }
`;
