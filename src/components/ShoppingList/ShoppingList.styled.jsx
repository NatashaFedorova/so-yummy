// ${props => props.theme.colors.text}
import styled from 'styled-components';
import bgImage from './shopping-list-background.png';
import deleteBtn from './deleteBtn.svg';
import {
  DefaultSectionTitle,
  DefaultSquare,
  DefaultSquareСircle,
} from 'components/constants/DefaultStyleComponents/DefaultStyleComponents';
import { device } from 'components/constants/deviceType/deviceType';
import Container from 'components/constants/Container';

export const MainStyleConponent = styled.main``;

export const Section = styled.section`
  position: relative;
  margin: 0 auto;

  @media ${device.mobile} {
    width: 375px;
  }

  @media ${device.tablet} {
    width: 768px;
  }

  @media ${device.desktop} {
    width: 1440px;
  }
`;

export const SectionContainer = styled(Container)`
  @media ${device.mobile} {
    padding-top: 50px;
    padding-bottom: 100px;
  }

  @media ${device.tablet} {
    padding-top: 72px;
    padding-bottom: 200px;
  }

  @media ${device.desktop} {
    padding-top: 100px;
    padding-bottom: 195px;
  }
`;

export const DecoreBox = styled.div`
  position: absolute;

  @media ${device.mobile} {
    height: 100px;
    width: 375px;
  }

  @media ${device.tablet} {
    height: 138px;
    width: 768px;
  }

  @media ${device.desktop} {
    height: 138px;
    width: 1440px;
  }
`;

export const Square = styled(DefaultSquare)`
  position: absolute;

  @media ${device.mobile} {
    top: 12px;
    left: 120px;
  }

  @media ${device.tablet} {
    top: 21px;
    left: 219px;
  }

  @media ${device.desktop} {
    top: 52px;
    left: 328px;
  }
`;

export const SecondSquare = styled(DefaultSquare)`
  position: absolute;

  @media ${device.mobile} {
    top: 44px;
    right: 16px;
  }

  @media ${device.tablet} {
    top: 34px;
    right: 24px;
  }

  @media ${device.desktop} {
    top: 65px;
    right: 172px;
  }
`;

export const SquareСircle = styled(DefaultSquareСircle)`
  position: absolute;

  @media ${device.mobile} {
    top: 77px;
    right: 120px;
  }

  @media ${device.tablet} {
    top: 91px;
    right: 315px;
  }

  @media ${device.desktop} {
    top: 135px;
    right: 617px;
  }
`;

export const Box = styled.div`
  display: flex;

  @media ${device.mobile} {
    gap: 24px;
  }

  @media ${device.tablet} {
    gap: 78px;
  }

  @media ${device.desktop} {
    gap: 142px;
  }
`;
export const ShoppingListWrapper = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #3e4462;
`;
export const IngredientsTable = styled.div`
  display: flex;
  width: 359px;
  height: 50px;
  background-color: rgb(139, 170, 54);
  border-radius: 8px;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px;
  margin: auto;
`;
export const ShoppingListName = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fafafa;
  margin-right: 167px;
`;

export const ShoppingListNumber = styled(ShoppingListName)`
  margin-right: 24px;
`;
export const ShoppingListButton = styled(ShoppingListName)`
  margin-right: 0;
`;
export const ShoppingListImage = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ebf3d4;
  padding: 6px;
  border-radius: 6px;
`;
export const IngredientCard = styled.div`
  width: 343px;
  height: 70px;
  background: transparent;
  margin: auto;
`;
export const IngredientsList = styled.ul`
  display: flex;
`;
export const IngredientImage = styled.li`
  display: flex;
  gap: 10px;
`;
export const IngredientImageBackground = styled.li`
  width: 60px;
  height: 60px;
  background: #ebf3d4;
  border-radius: 6px;
`;
export const IngredientWeight = styled.li`
  margin-left: auto;
  padding: 4px;
  background: #8baa36;
  height: fit-content;
  border-radius: 4px;
`;
export const IngredientDeleteButton = styled.button`
  background: url(${deleteBtn});
  border: 0;
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
`;
