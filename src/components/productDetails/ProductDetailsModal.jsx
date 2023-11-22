import React from "react";
import {
  LeftContent,
  ProductDetailImage,
  ProductDetailsWrapper,
  RightContent,
  ProductDetailSmallImgWrapper,
  ProductDetailSmallImg,
} from "./style";
import { CardImage } from "../productCard/style";

const ProductDetailsModal = ({ productDetail }) => {
  console.log(productDetail);
  return (
    <ProductDetailsWrapper>
      <LeftContent>
        <ProductDetailImage src={productDetail.thumbnail} />
        <ProductDetailSmallImgWrapper>
          {productDetail?.images.map((img, index) => {
            return <ProductDetailSmallImg src={img} key={index} />;
          })}
        </ProductDetailSmallImgWrapper>
      </LeftContent>
      <RightContent></RightContent>
    </ProductDetailsWrapper>
  );
};

export default ProductDetailsModal;
