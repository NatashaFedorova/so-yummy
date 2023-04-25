import styled from '@emotion/styled';
import { GrFormClose } from 'react-icons/gr';

export const BurgerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  z-index: 1050;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background: #ebf3d4;
  flex-direction: column;
  align-items: center;

  padding: 180px 130px 250px 130px;
`;

export const StyledGrFormClose = styled(GrFormClose)`
  position: absolute;
  top: 20px;
  right: 120px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const BurgerLogoDiv = styled.div`
  position: absolute;
  top: 18px;
  left: 116px;
`;
