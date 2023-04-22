import styled from "styled-components";

export const StyledFavoriteItem = styled.li`
  display: flex;
  gap: 14px;

  padding: 14px 9px;
  border: 1px solid black;
`;

export const FavoriteImg = styled.img`
  flex: 0 0 124px;
  width: 124px;
  height: 124px;

  border-radius: 8px;
`;

export const FavoriteBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-shink: 1;
  gap: 4px;

  max-height: 124px;
`;
export const FavoriteBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const FavoriteBoxCenter = styled.div``;
export const FavoriteBoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
`;

export const FavoriteTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: #3E4462; 
`;
export const FavoriteBtnDelete = styled.button`
  flex: 0 0 38px;
  width: 38px;
  height: 38px;

  background: #EBF3D4;
  border-radius: 4px;
`;

export const FavoriteDesc = styled.p`
  // width: 153px;
  height: 57px;
  padding-right: 36px;

  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #23262A;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: break-spaces;
  `;

export const FavoriteTime = styled.span`
  display: inline-block;

  color: #3E4462;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
`;
export const FavoriteBtnDetails = styled.button`
  width: 87px;
  height: 27px;

  font-size: 10px;
  line-height: 1.5;
  color: #FAFAFA;

  border-radius: 24px 44px;
  background: #22252A;
`;