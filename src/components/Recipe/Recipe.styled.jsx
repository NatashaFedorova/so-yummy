import styled from 'styled-components';
import DefaultBtn from 'components/constants/DefaultBtn/';
import { device } from 'components/constants/deviceType/deviceType';

export const HeroHead = styled.div`
    background-image: url('../images/recipebyId/recipebg.png');
    background-size: cover;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -78px;

    @media ${device.mobile} {
      padding: 164px 30px 32px;
    }
    @media ${device.tablet} {
      padding: 164px 130px 32px;
    }
    @media ${device.desktop} {
      padding: 164px 202px 32px;
    }


`;

export const HeroTitle = styled.h1`
  color: ${props => props.theme.colors.recipePage.title};
  margin-bottom: ${props => props.theme.fontSizes.xl};
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`;

export const HeroInfo = styled.p`
    color: ${props => props.theme.colors.startPage.iconClock};
    margin-bottom: ${props => props.theme.fontSizes.xl};
    font-size: ${props => props.theme.fontSizes.l};
`;

export const HeroBtn = styled(DefaultBtn)`
  background-color: ${props => props.theme.colors.recipePage.bgBtn};
  color: ${props => props.theme.colors.recipePage.iconClock};
  border: 2px solid;
  border-color: ${props => props.theme.colors.recipePage.borderBtn};
  margin-bottom: 70px;
    &:hover {
      color: ${props => props.theme.colors.recipePage.textBtnHover};
      background-color: ${props => props.theme.colors.recipePage.bgBtnHover};
    }
`;

export const HeroP = styled.p`
    display:flex;
    flex-wrap: wrap;
    &:before {
        content: url('../images/recipebyId/clock.svg');
        margin-top: -3px;
        padding-right: 7px;
      }
`;

export const IngListItem = styled.li`
display:flex;
align-items: center;
background-color: ${props => props.theme.colors.recipePage.bgCardIngredient};
padding: 0px 40px 0px 32px;
margin-top: 30px;
border-radius: 8px;
`;

export const IngListItemInfo = styled.div`
display:flex;
align-items: center;
width: 72%;
`;

export const IngListItemInfoText = styled.p`

color: ${props => props.theme.colors.recipePage.titleSecondry};

font-weight: ${props => props.theme.fontWeight.medium};

@media ${device.mobile} {
  font-size: ${props => props.theme.fontSizes.xs};
  margin-left: 20px;
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
    width: 13%
`;

export const IngListItemNumber = styled.p`
background-color: ${props => props.theme.colors.recipePage.borderBtn};
color: ${props => props.theme.colors.recipePage.textBtnHover};
font-size: ${props => props.theme.fontSizes.l};
font-weight: ${props => props.theme.fontWeight.semiBold};
border-radius: 4px;
padding: 5px 8px;
display: inline-block;
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
width: 15%;
text-align: right;
`;

export const IngListItemInput = styled.input`
position: absolute;
width: 35px;
height: 35px;
opacity: 0;
&:checked+label:before{
    content: url('../images/recipebyId/pick.svg');
}
`;

export const IngListItemLabel = styled.label`

&:before{ 
    content: "";
    width: 35px;
    height: 35px;
    display: inline-block;
    border: 1px solid #aaa;
    font-size: 41px;
    line-height: 19px;
    padding-left: 2px;
    text-align: center;
    vertical-align: middle;
    box-shadow: rgba(126, 126, 126, 0.5) 0px 0px 0px 2px inset;
    border-radius: 4px;
  }
`;


export const PrepWrap = styled.div`
    display:flex;
    flex-wrap: wrap;
    padding-top: 40px;
    padding-bottom: 40px;





`;

export const PrepInfo = styled.div`
   

    @media ${device.mobile} {
        width: 100%;
        padding-right: 20px;
      }
      @media ${device.desktop} {
        width: 63%;
        padding-right: 45px;
      }
`;

export const PrepImg = styled.div`
    @media ${device.mobile} {
        width: 100%;
      }
      @media ${device.desktop} {
        width: 37%;
      }
`;

export const PrepImgImg = styled.img`
    border-radius: 8px;
`;


export const PrepInfoHead = styled.h2`
color: ${props => props.theme.colors.recipePage.titleSecondry};
margin-bottom: ${props => props.theme.fontSizes.xl};
font-size: ${props => props.theme.fontSizes.xl};
font-weight: ${props => props.theme.fontWeight.semiBold};
`;

export const PrepInfoWrap = styled.div`
display:flex;
`;


export const PrepInfoText = styled.p`
color: ${props => props.theme.colors.startPage.iconClock};
font-size: ${props => props.theme.fontSizes.l};
margin-bottom: ${props => props.theme.fontSizes.s};
`;

export const PrepInfoSpan = styled.span`
padding: 4px 9px 4px 9px;
border-radius: 50%;
font-size: ${props => props.theme.fontSizes.xs};
font-weight: ${props => props.theme.fontWeight.semiBold};
background-color: ${props => props.theme.colors.recipePage.bgBtnHover};
color: ${props => props.theme.colors.recipePage.textNumber};
display: flex;
align-items: center;
justify-content: center;
min-width: 21px;
min-height: 21px;
max-width: 22px;
max-height: 22px;
margin-right: 14px;
`;
