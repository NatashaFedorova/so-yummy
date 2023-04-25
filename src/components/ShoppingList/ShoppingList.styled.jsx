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
  background-color: rgb(139, 170, 54);
  border-radius: 8px;
  -webkit-box-align: center;
  align-items: center;
  margin: auto;

  @media ${device.mobile} {
    width: 359px;
    height: 50px;
    padding: 10px;
    margin-bottom: 32px;
  }
  @media ${device.tablet} {
    width: 704px;
    padding: 20px 16px;
    margin-bottom: 50px;
  }
  @media ${device.desktop} {
    width: 1240px;
    padding: 21px 40px;
    margin-bottom: 51px;
  }
`;
export const ShoppingListName = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fafafa;
  margin-right: 167px;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 18px;
    color: #fafafa;
    margin-right: 167px;
  }
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 27px;
    align-items: center;
    letter-spacing: 0.03em;
    margin-right: auto;
    color: #fafafa;
  }
  @media ${device.desktop} {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;

    color: #fafafa;
  }
`;

export const ShoppingListNumber = styled(ShoppingListName)`
  @media ${device.mobile} {
    margin-right: 24px;
  }
  @media ${device.tablet} {
    margin-right: 78px;
  }
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
  @media ${device.mobile} {
    width: 343px;
    background: transparent;
    margin: auto;
    padding-bottom: 24px;
  }
  @media ${device.tablet} {
    width: 704px;
  }
  @media ${device.desktop} {
    width: 1168px;
  }
`;
export const IngredientsList = styled.ul`
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e0e0;
`;
export const IngredientImage = styled.li`
  display: flex;

  @media ${device.mobile} {
    gap: 10px;
  }
  @media ${device.tablet} {
    gap: 16px;
  }
`;
export const IngredientImageBackground = styled.li`
  background: #ebf3d4;
  border-radius: 6px;
  padding: 6px;
  @media ${device.mobile} {
    width: 60px;
    height: 60px;
  }
  @media ${device.tablet} {
    width: 92px;
    height: 97px;
  }
  @media ${device.desktop} {
    font-size: 44px;
    line-height: 44px;
  }
`;
export const ShoppingListTitle = styled.h3`
  color: #001833;
  font-weight: 600;
  letter-spacing: -0.02em;
  @media ${device.mobile} {
    font-size: 28px;
    line-height: 28px;

    letter-spacing: -0.02em;
  }
  @media ${device.tablet} {
    font-size: 32px;
    line-height: 32px;
  }
`;
export const IngredientTitle = styled.p`
  color: #3e4462;
  @media ${device.mobile} {
    font-size: 10px;
    line-height: 12px;
    color: #3e4462;
  }
  @media ${device.tablet} {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const IngredientWeight = styled.li`
  @media ${device.mobile} {
    margin-left: auto;
    padding: 4px;
    background: #8baa36;
    height: fit-content;
    border-radius: 4px;
    margin-right: 46px;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;

    text-align: center;

    color: #fafafa;
  }
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 27px;
    padding: 4px 8px;
    margin-right: 110px;
  }
`;
export const IngredientDeleteButton = styled.button`
  background: url(${deleteBtn});
  border: 0px;

  padding: 0px;
  cursor: pointer;
  @media ${device.mobile} {
    width: 14px;
    height: 14px;
    margin-right: 23px;
  }
  @media ${device.tablet} {
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: 20px;
    margin-right: 45px;
  }
  @media ${device.desktop} {
    margin-right: 30px;
  }
`;
