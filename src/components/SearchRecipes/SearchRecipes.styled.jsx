import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const Options = styled.div`
  padding: 8px 14px 8px 14px;
  width: 146px;

  display: flex;
  justify-content: space-between;
  background-color: grey;
  border-radius: 4px;

  position: relative;
`;
export const SearchOption = styled.li`
  max-width: 146px;
  padding: 8px 108px 8px 16px
  border-radius: 4px;
`;
export const SearchOptions = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
`;

export const SearchBox = styled.div`

@media ${device.mobile} {
    margin-left: 24px;
    margin-right: 24px;
  }

  @media ${device.tablet} {
    width: 470px
  }

  @media ${device.tablet} {
    margin-right: 171px;
    margin-left: 171px;
  }

  
  margin-top: 40px;

  margin-bottom: 100px;
`;
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
  width: 100%
`;
export const SearchForm = styled.form`
  position: relative;
`;
