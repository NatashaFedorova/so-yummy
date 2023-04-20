import DefaultBtn from 'components/constants/DefaultBtn';
import styled from 'styled-components';

export const ModalUser = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 18px;
  border-radius: 8px;

  top: 78px;
  right: 111px;

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;

  & button:first-child {
    border: none;
    background-color: white;
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledLogoutBtn = styled(DefaultBtn)`
  display: flex;
  align-items: center;
  background-color: #8baa36;
  color: white;
  padding: 12px 32px;
  &:hover {
    color: black;
  }
`;
