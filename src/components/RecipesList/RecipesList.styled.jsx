import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  @media ${device.tablet} {
    display: grid ;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const RecipeCard = styled.li`
  position: relative;
`;

export const RecipeImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
export const RecipeTitle = styled.p`
  border-radius: 8px;
  text-align: start;
  padding: 16px;
  width: 90%;

  background-color: ${p => p.theme.colors.cardRecipe.bgbtn};
  color:  ${p => p.theme.colors.cardRecipe.textBtn};
  position: absolute;
  left: 18px;
  bottom: 26px;
  z-index: 999;
`;
