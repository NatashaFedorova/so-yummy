import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';
import {
  MotivationCardThumbDefault,
  MotivationCardBtnCloseDefault,
  MotivationCardIconClose,
  MotivationCardTextDefault,
} from 'components/constants/DefaultStyleComponents/DefaultStyleComponents';

const imgDecor = `${process.env.PUBLIC_URL}/images/motivationCards/decor.svg`;

const motivСardsAboutFavoriteRecipes = {
  mob: `${process.env.PUBLIC_URL}/images/motivationCards/favorite/favorite-1x-mob.jpg`,
  tab: `${process.env.PUBLIC_URL}/images/motivationCards/favorite/favorite-1x-tab.jpg`,
  des: `${process.env.PUBLIC_URL}/images/motivationCards/favorite/favorite-1x-des.jpg`,
};

const motivСardsAboutVisits = {
  mob: `${process.env.PUBLIC_URL}/images/motivationCards/visits/visits-1x-mod.jpg`,
  tab: `${process.env.PUBLIC_URL}/images/motivationCards/visits/visits-1x-tab.jpg`,
  des: `${process.env.PUBLIC_URL}/images/motivationCards/visits/visits-1x-des.jpg`,
};

const motivСardsAboutOwnRecipes = {
  mob: `${process.env.PUBLIC_URL}/images/motivationCards/ownRecipes/ownRecipes-1x-mob.jpg`,
  tab: `${process.env.PUBLIC_URL}/images/motivationCards/ownRecipes/ownRecipes-1x-tab.jpg`,
  des: `${process.env.PUBLIC_URL}/images/motivationCards/ownRecipes/ownRecires-1x-des.jpg`,
};

const imgMobJPGUrl = `${process.env.PUBLIC_URL}/images/motivationCards/default/mob/default-1x-mob.jpg`;
const imgTabJPGUrl = `${process.env.PUBLIC_URL}/images/motivationCards/default/tab/default-1x-tab.jpg`;
const imgDesJPGUrl = `${process.env.PUBLIC_URL}/images/motivationCards/default/des/default-1x-des.jpg`;

export const Backdrop = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(3, 2, 2, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  position: absolute;
`;

export const GlobalList = styled.ul`
  top: 20%;
  overscroll-behavior: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;

  @media ${device.mobile} {
    width: 300px;
    gap: 16px;
    width: 330px;
    height: 60vh;
  }

  @media ${device.tablet} {
    width: 704px;
    gap: 32px;
    width: 430px;
    height: 400px;
  }

  @media ${device.desktop} {
    width: 1200px;
    gap: 30px;
    width: 1080px;
    height: 500px;
  }
`;

export const ListMotivationCards = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${device.mobile} {
    width: 300px;
  }

  @media ${device.tablet} {
    width: 704px;
    gap: 32px;
  }

  @media ${device.desktop} {
    width: 1200px;
    gap: 30px;
  }
`;

export const Item = styled.li``;

export const Text = styled(MotivationCardTextDefault)`
  text-align: center;
  @media ${device.mobile} {
    top: 124px;
    left: 80px;
    width: 140px;
  }

  @media ${device.tablet} {
    top: 167px;
    left: 100px;
    width: 195px;
    height: 216px;
  }

  @media ${device.desktop} {
    left: 151px;
    top: 251px;
    width: 197px;
  }
`;

export const BoxForfavoriteCard = styled(MotivationCardThumbDefault)`
  @media ${device.mobile} {
    background-image: url('${motivСardsAboutFavoriteRecipes.mob}');
  }
  @media ${device.tablet} {
    background-image: url('${motivСardsAboutFavoriteRecipes.tab}');
  }

  @media ${device.desktop} {
    background-image: url('${motivСardsAboutFavoriteRecipes.des}');
  }
`;

export const BoxForOwnRecipesCard = styled(MotivationCardThumbDefault)`
  @media ${device.mobile} {
    background-image: url('${motivСardsAboutOwnRecipes.mob}');
  }
  @media ${device.tablet} {
    background-image: url('${motivСardsAboutOwnRecipes.tab}');
  }

  @media ${device.desktop} {
    background-image: url('${motivСardsAboutOwnRecipes.des}');
  }
`;

export const BoxForVisitsCard = styled(MotivationCardThumbDefault)`
  @media ${device.mobile} {
    background-image: url('${motivСardsAboutVisits.mob}');
  }
  @media ${device.tablet} {
    background-image: url('${motivСardsAboutVisits.tab}');
  }

  @media ${device.desktop} {
    background-image: url('${motivСardsAboutVisits.des}');
  }
`;

export const MotivationCardThumb = styled(MotivationCardThumbDefault)`
  @media ${device.mobile} {
    background-image: url('${imgMobJPGUrl}');
  }
  @media ${device.tablet} {
    background-image: url('${imgTabJPGUrl}');
  }

  @media ${device.desktop} {
    background-image: url('${imgDesJPGUrl}');
  }
`;

export const BtnClose = styled(MotivationCardBtnCloseDefault)``;

export const IconClose = styled(MotivationCardIconClose)``;

export const Decor = styled.div`
  &::after {
    content: url('${imgDecor}');
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  z-index: 111;
  position: absolute;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.achivement.accent};

  @media ${device.mobile} {
    left: 130px;
    bottom: 30px;
    width: 40px;
    height: 40px;
  }

  @media ${device.tablet} {
    left: 176px;
    bottom: 38px;
    width: 48px;
    height: 48px;
  }

  @media ${device.desktop} {
    left: 226px;
    bottom: 54px;
  }
`;
