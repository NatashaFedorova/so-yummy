import styled from 'styled-components';
import { GrCafeteria } from 'react-icons/gr';

export const LogoSvg = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: #ebf3d4;
  align-items: center;
  justify-content: center;
`;

export const LogoDiv = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  size: 28px;
  color: white;
`;

export const StyledGrCafeteria = styled(GrCafeteria)`
  width: 25px;
  height: 25px;
  & path {
    stroke: #8baa36;
  }
`;
