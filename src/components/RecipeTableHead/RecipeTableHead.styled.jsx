import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';

export const IngHead = styled.div`
    display:flex;
    background-color: ${props => props.theme.colors.recipePage.bdAccent};
    padding: 30px;
    margin-top: 30px;
    border-radius: 8px;
`;

export const IngHeadTitleI = styled.span`
    color: ${props => props.theme.colors.recipePage.textBtnHover};
    font-weight: ${props => props.theme.fontWeight.semiBold};

@media ${device.mobile} {
    font-size: ${props => props.theme.fontSizes.xs};
    width:53%;
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.m};
    width:65%;
  }
  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.l};
    width:70%;
  }
`;

export const IngHeadTitleN = styled.span`
    color: ${props => props.theme.colors.recipePage.textBtnHover};
    font-weight: ${props => props.theme.fontWeight.semiBold};
    width:20%;

@media ${device.mobile} {
    font-size: ${props => props.theme.fontSizes.xs};
    width: 25%;
  }
@media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.m};
  }
@media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const IngHeadTitleA = styled.span`
    color: ${props => props.theme.colors.recipePage.textBtnHover};
    font-weight: ${props => props.theme.fontWeight.semiBold};
    text-align: right;

@media ${device.mobile} {
    font-size: ${props => props.theme.fontSizes.xs};
    width:22%;
  }
@media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.m};
    width:15%;
  }
@media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.l};
    width:10%;
  }
`;