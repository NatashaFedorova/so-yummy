import styled from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';

export const SubcribeFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;

  & h3 {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;

    margin-bottom: 14px;
  }

  & p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.02em;

    margin-bottom: 28px;
  }

  & label {
    display: flex;
    padding-top: 17px;
    padding-bottom: 17px;
    border: 1px solid white;
    border-radius: 6px;

    margin-bottom: 16px;
  }

  & input {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.02em;
    border: none;
    color: white;
  }

  & button {
    height: 60px;
    background-color: #8baa36;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

export const StyledHiOutlineMail = styled(HiOutlineMail)`
  width: 50px;
  height: 28px;
`;
