import Container from 'components/constants/Container';
import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const HeaderS = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 10;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  padding: 0px 16px;
`;

export const HeaderRightDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 187px;
`;

export const RightDivSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
export const HeaderSwitchDiv = styled.div`
  display: none;
  @media ${device.desktop} {
    display: flex;
  }
`;
