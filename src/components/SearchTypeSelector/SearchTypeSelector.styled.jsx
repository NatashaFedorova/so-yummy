import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const Options = styled.button`
  padding: 8px 14px 8px 14px;
  width: 146px;

  border: none;
  display: flex;
  justify-content: space-between;
  background-color: #d9d9d9;
  border-radius: 4px;

  cursor: pointer;
  position: relative;
`;
export const SearchOption = styled.li`
  max-width: 146px;
  padding: 8px 108px 8px 16px;
  border-radius: 4px;
`;
export const SearchOptions = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 999;
  background-color: #fafafa;
  border-radius: 0px 0px 6px 6px;
`;

export const SearchWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
