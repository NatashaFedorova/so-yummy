import styled from 'styled-components';
import { size } from 'components/constants/deviceType/deviceType';

export const AddRecipeSection = styled.section`
  padding: 50px 0 100px 0;

  font-family: 'Poppins', sans-serif;
  background-color: transparent;

  @media screen and (min-width: ${size.tablet}) {
    padding: 72px 0 200px 0;
  }

  @media screen and (min-width: ${size.desktop}) {
    padding: 100px 0 200px 0;
  }
`;

export const InternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 72px;
  flex: 1 0 auto;

  @media screen and (max-width: ${size.tablet - 1}) {
    align-items: center;
  }

  @media screen and (min-width: ${size.tablet}) {
    gap: 100px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 72px;

  @media screen and (min-width: ${size.tablet}) {
    gap: 100px;
  }

  @media screen and (min-width: ${size.tablet}) {
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    gap: 121px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
