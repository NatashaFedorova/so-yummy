import styled from "styled-components";
import { device } from "components/constants/deviceType/deviceType";

export const StyledFavoriteList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 50px;

  @media ${device.tablet} {gap: 40px;}
  @media ${device.desktop} {gap: 50px;}
`