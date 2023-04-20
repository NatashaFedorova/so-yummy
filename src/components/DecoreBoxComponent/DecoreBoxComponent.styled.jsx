import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';
import {
  DefaultSquare,
  DefaultSquareСircle,
} from 'components/constants/DefaultStyleComponents/DefaultStyleComponents';

export const DecoreBox = styled.div`
  position: relative;

  @media ${device.mobile} {
    height: 100px;
  }

  @media ${device.desktop} {
    height: 138px;
  }
`;

export const Square = styled(DefaultSquare)`
  position: absolute;

  @media ${device.mobile} {
    top: 12px;
    left: 104px;
  }

  @media ${device.tablet} {
    top: 21px;
    left: 187px;
  }

  @media ${device.desktop} {
    top: 56px;
    left: 228px;
  }
`;

export const SecondSquare = styled(DefaultSquare)`
  position: absolute;

  @media ${device.mobile} {
    top: 44px;
    right: 0;
  }

  @media ${device.tablet} {
    top: 34px;
    right: -8px;
  }

  @media ${device.desktop} {
    top: 69px;
    right: 72px;
  }
`;

export const SquareСircle = styled(DefaultSquareСircle)`
  position: absolute;

  @media ${device.mobile} {
    top: 77px;
    right: 104px;
  }

  @media ${device.tablet} {
    top: 91px;
    right: 283px;
  }

  @media ${device.desktop} {
    top: 140px;
    right: 517px;
  }
`;
