import { size } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const PopularRecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${size.tablet}) {
    gap: 40px;
  }

  @media screen and (min-width: ${size.desktop}) {
    width: 320px;
  }
`;
