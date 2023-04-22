import { size } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const PopularRecipe = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: ${size.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${size.desktop}) {
    flex-direction: column;
  }
`;
