import styled from 'styled-components';
import { GrCafeteria } from 'react-icons/gr';

export const LogoSvg = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: #8baa36;
  align-items: center;
  justify-content: center;
`;

export const StyledGrCafeteria = styled(GrCafeteria)`
  width: 25px;
  height: 25px;
  & path {
    stroke: white;
  }
`;
