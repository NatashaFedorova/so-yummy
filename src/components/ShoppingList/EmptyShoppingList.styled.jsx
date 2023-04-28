import styled from 'styled-components';

import { device } from 'components/constants/deviceType/deviceType';

export const EmptyShoppingListImage = styled.img`
  margin: 0 auto;
  @media ${device.mobile} {
    width: 25%;
  }
  @media ${device.tablet} {
    width: 25%;
  }
  @media ${device.desktop} {
    width: 25%;
  }
`;
export const EmptyShoppingListParagraph = styled.p`
  margin: 50px auto;
  text-align: center;
  @media ${device.mobile} {
    font-size: 24px;
  }
  @media ${device.tablet} {
    font-size: 34px;
  }
  @media ${device.desktop} {
    font-size: 44px;
  }
`;
