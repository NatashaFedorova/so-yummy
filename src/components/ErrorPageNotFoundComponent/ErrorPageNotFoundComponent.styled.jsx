import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';

export const MainBox = styled.main`
  position: relative;
  padding-bottom: 100px;
`;

export const BoxForContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  margin-left: auto;
  margin-right: auto;

  @media ${device.mobile} {
    max-width: 259px;
    max-height: 170px;
  }

  @media ${device.tablet} {
    max-height: 331px;
    max-width: 498px;
  }
`;

export const BoxForImg = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;

  @media ${device.mobile} {
    max-width: 259px;
    max-height: 170px;
  }

  @media ${device.tablet} {
    max-height: 331px;
    max-width: 498px;
  }
`;

export const Text = styled.p`
  line-height: 1.29;
  text-align: center;
  letter-spacing: -0.02em;

  @media ${device.mobile} {
    width: 206px;
    font-size: ${props => props.theme.fontSizes.s};
  }

  @media ${device.tablet} {
    width: 428px;
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const PartText = styled.span`
  display: block;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: 1.11;
  letter-spacing: -0.02em;

  @media ${device.mobile} {
    font-size: ${props => props.theme.fontSizes.l};
  }

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;
