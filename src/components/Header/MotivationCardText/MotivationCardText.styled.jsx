import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';
import {
  MotivationCardTextDefault,
  MotivationCardAccentTextDefault,
} from 'components/constants/DefaultStyleComponents/DefaultStyleComponents';

export const Text = styled(MotivationCardTextDefault)`
  @media ${device.mobile} {
    width: 165px;
    top: 124px;
    left: 68px;
  }

  @media ${device.tablet} {
    width: 217px;
    top: 166px;
    left: 92px;
  }

  @media ${device.desktop} {
    width: 217px;
    top: 250px;
    left: 142px;
  }
`;

export const AccentText = styled(MotivationCardAccentTextDefault)``;
