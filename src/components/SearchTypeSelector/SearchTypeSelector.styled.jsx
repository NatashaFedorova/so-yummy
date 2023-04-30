import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';
import { AiOutlineDown } from 'react-icons/ai';

export const LineDown = styled(AiOutlineDown)`
  fill: ${p => p.theme.colors.searchPage.icon};
  pointer-events: none;
`;

export const Options = styled.button`
  border: none;
  padding: 8px 14px 8px 14px;

  @media ${device.tablet} {
    padding: 10px 14px 10px 14px;
  }
  @media ${device.desktop} {
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${p => p.theme.colors.searchPage.textSelect};
  background-color: ${p => p.theme.colors.searchPage.bgOptionsBtn};
  border: 1px solid ${p => p.theme.colors.searchPage.optionBgColor};

  border-radius: 4px;

  cursor: pointer;
`;
export const SearchOption = styled.li`
  color: ${p => p.theme.colors.searchPage.textSelect};
  cursor: pointer;
  width: 100%;
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
`;
export const SearchOptions = styled.ul`
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 999;
  background-color: ${p => p.theme.colors.searchPage.bgDropdown};
  border-radius: 0px 0px 6px 6px;
`;
export const SearchBox = styled.div`
  position: relative;
  width: 146px;
`;
export const SearchWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media ${device.tablet} {
    gap: 18px;
  }
`;
