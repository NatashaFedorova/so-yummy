import { size } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const AddRecipeFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media screen and (min-width: ${size.tablet}) {
    gap: 100px;
  }
`;
