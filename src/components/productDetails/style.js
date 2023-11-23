import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
`;

export const LeftContent = styled.div``;

export const ProductDetailImage = styled.img`
  height: 250px;
  width: 100%;
  object-position: center;
  object-fit: cover;
`;

export const ProductDetailSmallImgWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
`;
export const ProductDetailSmallImg = styled.img`
  height: 50px;
  width: 50px;
  object-position: center;
  object-fit: cover;
  cursor: pointer;

  &.active {
    border: 2px solid yellow;
    padding: 3px;
  }
`;
export const RightContent = styled.div``;

export const ProductText = styled.p``;
export const BoldWrapper = styled.b``;
