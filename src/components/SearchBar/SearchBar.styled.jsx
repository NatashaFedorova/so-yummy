import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';


export const SearchWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const SearchButton = styled.button`
  cursor: pointer;
  display: block;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #8baa36;
  padding: 16px 32px;
  position: absolute;
  right: 0;
  bottom: 0;
`;
export const SearchInput = styled.input`
  height: 53px;
  padding: 16px 146px 16px 32px;
  border: 1px solid #f0f0f0;
  background: #ffffff;
  border-radius: 24px 44px;
  width: 100%;
`;
export const SearchFormd = styled.form`
  position: relative;
`;