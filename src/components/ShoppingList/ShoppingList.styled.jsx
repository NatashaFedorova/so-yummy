// ${props => props.theme.colors.text}
import styled from 'styled-components';
import {
  DefaultSectionTitle,
  DefaultSquare,
  DefaultSquareСircle,
} from 'components/constants/DefaultStyleComponents/DefaultStyleComponents';
import { device } from 'components/constants/deviceType/deviceType';

export const MainStyleConponent = styled.main`
  position: relative;
`;

export const Section = styled.section`
  position: relative;
  border: 1px solid red;
  display: flex;
  flex-direction: column;

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

export const SectionTitle = styled(DefaultSectionTitle)`
  color: ${props => props.theme.colors.shoppingListPage.title};

  @media ${device.mobile} {
    margin-bottom: 50px;
  }
  @media ${device.tablet} {
    margin-bottom: 72px;
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

export const ListTableHeards = styled.ul`
  background-color: ${props => props.theme.colors.shoppingListPage.bgAccent};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  @media ${device.mobile} {
    padding: 10px;
    margin-bottom: 32px;
  }

  @media ${device.tablet} {
    padding: 16px 20px;
    margin-bottom: 50px;
  }

  @media ${device.desktop} {
    padding: 17px 40px;
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

export const ItemTableHeaders = styled.li`
  color: ${props => props.theme.colors.shoppingListPage.textSecondary};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: 1.5;

  @media ${device.mobile} {
    font-size: ${props => props.theme.fontSizes.xs};
  }

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.mobile} {
    gap: 24px;
  }

  @media ${device.tablet} {
    gap: 44px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.mobile} {
    gap: 24px;
  }

  @media ${device.tablet} {
    gap: 44px;
  }
`;
