import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';
import pickIcon from './pick.svg'

export const IngListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.recipePage.bgCardIngredient};
  margin-top: 30px;
  border-radius: 8px;

  @media ${device.mobile} {
    padding: 0px 15px 0px 12px;
  }
  @media ${device.tablet} {
    padding: 0px 40px 0px 32px;
  }
  @media ${device.desktop} {
    padding: 0px 40px 0px 32px;
  }
`;

export const IngListItemInfo = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    width: 52%;
  }
  @media ${device.tablet} {
    width: 62%;
  }
  @media ${device.desktop} {
    width: 67%;
  }
`;

export const IngListItemInfoText = styled.p`
  color: ${props => props.theme.colors.recipePage.titleSecondry};
  font-weight: ${props => props.theme.fontWeight.medium};

  @media ${device.mobile} {
    font-size: ${props => props.theme.fontSizes.xs};
    margin-left: 12px;
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.xl};
    margin-left: 40px;
  }
  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.xl};
    margin-left: 40px;
  }
`;

export const IngListItemNumberWrap = styled.div`
  @media ${device.mobile} {
    font-size: ${props => props.theme.fontSizes.xxs};
    width: 20%;
    text-align: center;
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.l};
    width: 15%;
  }
  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.l};
    width: 14%;
  }
`;

export const IngListItemNumber = styled.p`
  background-color: ${props => props.theme.colors.recipePage.borderBtn};
  color: ${props => props.theme.colors.recipePage.textBtnHover};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  border-radius: 4px;
  padding: 5px 8px;
  display: inline-block;
  text-align: center;

  @media ${device.mobile} {
    font-size: ${props => props.theme.fontSizes.xxs};
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.l};
  }
  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const IngImg = styled.img`
  @media ${device.mobile} {
    width: 57px;
    height: 57px;
  }
  @media ${device.tablet} {
    width: 112px;
    height: 112px;
  }
  @media ${device.desktop} {
    width: 180px;
    height: 180px;
  }
`;

export const IngListItemCheckWrap = styled.div`
  position: relative;
  text-align: right;

  @media ${device.mobile} {
    width: 29%;
    padding-right: 10px;
  }
  @media ${device.tablet} {
    width: 23%;
  }
  @media ${device.desktop} {
    width: 19%;
  }
`;

export const IngListItemInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked + label:before {
    content: url(${pickIcon});
  }
  @media ${device.mobile} {
    width: 18px;
    height: 18px;
  }
  @media ${device.tablet} {
    width: 35px;
    height: 35px;
  }
  @media ${device.desktop} {
    width: 35px;
    height: 35px;
  }
`;

export const IngListItemLabel = styled.label`
  &:before {
    content: '';
    display: inline-block;
    border: 1px solid #aaa;
    text-align: center;
    vertical-align: middle;
    border-radius: 4px;

    @media ${device.mobile} {
      width: 18px;
      height: 18px;
      box-shadow: rgba(126, 126, 126, 0.5) 0px 0px 0px 1px inset;
      line-height: 2px;
      padding-left: 0;
    }
    @media ${device.tablet} {
      width: 35px;
      height: 35px;
      box-shadow: rgba(126, 126, 126, 0.5) 0px 0px 0px 2px inset;
      font-size: 41px;
      line-height: 19px;
      padding-left: 2px;
    }
    @media ${device.desktop} {
      width: 35px;
      height: 35px;
      box-shadow: rgba(126, 126, 126, 0.5) 0px 0px 0px 2px inset;
      font-size: 41px;
      line-height: 19px;
      padding-left: 2px;
    }
  }
`;
