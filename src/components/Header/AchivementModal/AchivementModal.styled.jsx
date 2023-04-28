import styled from 'styled-components';

import { device } from 'components/constants/deviceType/deviceType';
import {
  MotivationCardThumbDefault,
  MotivationCardBtnCloseDefault,
  MotivationCardIconClose,
} from 'components/constants/DefaultStyleComponents/DefaultStyleComponents';

export const Backdrop = styled.div`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(3, 2, 2, 0.7);
  display: flex;
  place-content: center;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const MotivationCardText = styled.p`
  z-index: 11;
  position: absolute;
  color: ${props => props.theme.colors.achivement.text};
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: center;
  font-feature-settings: 'liga' off;

  @media ${device.mobile} {
    top: 124px;
    left: 80px;
    width: 140px;
    font-size: 20px;
    line-height: 1.2;
  }

  @media ${device.tablet} {
    top: 167px;
    left: 100px;
    width: 195px;
    height: 216px;
    font-size: 28px;
    line-height: 1.07;
  }

  @media ${device.desktop} {
    left: 151px;
    top: 251px;
    width: 197px;
  }
`;

export const MotivationCardThumb = styled(MotivationCardThumbDefault)`
  @media ${device.mobile} {
    background-image: url('${process.env
      .PUBLIC_URL}/images/motivationCards/mob/img-default-favorite-mod-1x-min.png');
  }

  @media ${device.tablet} {
    background-image: url('${process.env
      .PUBLIC_URL}/images/motivationCards/tab/img-default-favorite-tab-1x-min.png');
  }

  @media ${device.desktop} {
    background-image: url('${process.env
      .PUBLIC_URL}/images/motivationCards/des/img-default-favorite-des-1x-min.png');
  }
`;

export const BtnClose = styled(MotivationCardBtnCloseDefault)``;

export const IconClose = styled(MotivationCardIconClose)``;
