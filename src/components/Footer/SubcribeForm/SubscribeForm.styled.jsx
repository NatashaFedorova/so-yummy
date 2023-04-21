import styled from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';
import { device } from 'components/constants/deviceType/deviceType';

export const SubcribeFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 12px;
    padding-left: 128px;
    padding-top: 72px;
  }
  @media ${device.desktop} {
    width: 340px;
    flex-direction: column;
    padding: 0;
  }

  & h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;

    display: none;

    @media ${device.desktop} {
      display: block;
      margin-bottom: 14px;
    }
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.02em;

    display: none;
    margin-bottom: 0;

    @media ${device.desktop} {
      display: block;
      margin-bottom: 28px;
    }
  }

  & label {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid white;
    border-radius: 6px;
    align-items: center;

    margin-bottom: 16px;
    @media ${device.tablet} {
      margin-bottom: 0;
    }
    @media ${device.desktop} {
      padding-top: 17px;
      padding-bottom: 17px;
    }
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
