import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const NotFoundBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;
export const NotFoundImg = styled.img`
  width: 208px;
  height: 133px;
  @media ${device.tablet} {
    width: 350px;
    height: 225px;
  }
`;
export const NotFoundText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  @media ${device.tablet} {
    font-size: 24px;
    line-height: 24px;
  }
  text-align: center;

  color: ${p => p.theme.colors.searchPage.text};

  opacity: 0.5;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-bottom: 40px;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 50px;
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 60px;
  }
`;
