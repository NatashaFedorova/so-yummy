import styled from 'styled-components';
import DefaultBtn from 'components/constants/DefaultBtn/';

export const HeroHead = styled.div`
    background-image: url('../images/recipebyId/recipebg.png');
    left: 0px;
    top: 0px;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 164px 202px 32px;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -78px;
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



export const IngHead = styled.div`
    display:flex;
    background-color: ${props => props.theme.colors.recipePage.bdAccent};
    padding: 30px;
    margin-top: 30px;
    border-radius: 8px;
`;


export const IngHeadTitleI = styled.span`
color: ${props => props.theme.colors.recipePage.textBtnHover};
font-size: ${props => props.theme.fontSizes.l};
font-weight: ${props => props.theme.fontWeight.semiBold};
width:70%;
`;

export const IngHeadTitleN = styled.span`
color: ${props => props.theme.colors.recipePage.textBtnHover};
font-size: ${props => props.theme.fontSizes.l};
font-weight: ${props => props.theme.fontWeight.semiBold};
width:20%;
`;


export const IngHeadTitleA = styled.span`
color: ${props => props.theme.colors.recipePage.textBtnHover};
font-size: ${props => props.theme.fontSizes.l};
font-weight: ${props => props.theme.fontWeight.semiBold};
width:10%;
text-align: right;
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
margin-left: 40px;
color: ${props => props.theme.colors.recipePage.titleSecondry};
font-size: ${props => props.theme.fontSizes.xl};
font-weight: ${props => props.theme.fontWeight.medium};
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
    width: 180px;
    height: 180px;
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
`;

export const PrepInfo = styled.div`
    width: 63%;
`;

export const PrepImg = styled.div`
    width: 37%;
`;

export const PrepInfoHead = styled.h2`
color: ${props => props.theme.colors.recipePage.titleSecondry};
margin-bottom: ${props => props.theme.fontSizes.xl};
font-size: ${props => props.theme.fontSizes.xl};
font-weight: ${props => props.theme.fontWeight.semiBold};
`;

export const PrepInfoText = styled.p`
color: ${props => props.theme.colors.startPage.iconClock};
font-size: ${props => props.theme.fontSizes.l};
margin-bottom: ${props => props.theme.fontSizes.s};
`;

export const PrepInfoSpan = styled.span`
color: #fff;
padding: 4px 9px 4px 9px;
border-radius: 50%;
font-size: ${props => props.theme.fontSizes.s};
font-weight: ${props => props.theme.fontWeight.semiBold};
background-color: ${props => props.theme.colors.recipePage.bgBtnHover};
`;
