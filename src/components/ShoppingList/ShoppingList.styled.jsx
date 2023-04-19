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
