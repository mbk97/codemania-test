import React, { useState } from "react";
import {
  LeftContent,
  ProductDetailImage,
  ProductDetailsWrapper,
  RightContent,
  ProductDetailSmallImgWrapper,
  ProductDetailSmallImg,
  ProductText,
  BoldWrapper,
} from "./style";

const ProductDetailsModal = ({ productDetail }) => {
  const imgArr = [productDetail.thumbnail, ...productDetail.images];
  const [activeIndex, setActiveIndex] = useState(0);
  const [image, setImage] = useState(imgArr[activeIndex]);

  return (
    <ProductDetailsWrapper>
      <LeftContent>
        <ProductDetailImage src={image} />
        <ProductDetailSmallImgWrapper>
          {imgArr.map((img, index) => {
            return (
              <ProductDetailSmallImg
                src={img}
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => {
                  setImage(img);
                  setActiveIndex(index);
                }}
              />
            );
          })}
          <p>**Click on any image to preview</p>
        </ProductDetailSmallImgWrapper>
        <ProductText>
          <BoldWrapper>Title: </BoldWrapper> {productDetail.title}
        </ProductText>
        <ProductText>
          <BoldWrapper>Brand:</BoldWrapper> {productDetail.brand}
        </ProductText>
        <ProductText>
          <BoldWrapper>Category:</BoldWrapper> {productDetail.category}
        </ProductText>
        <ProductText>
          <BoldWrapper>Price:</BoldWrapper> $
          {productDetail.price.toLocaleString()}
        </ProductText>
        <ProductText>
          <BoldWrapper>Rating:</BoldWrapper> {productDetail.rating}
        </ProductText>
        <ProductText>
          <BoldWrapper>Stock:</BoldWrapper> {productDetail.stock}
        </ProductText>
        <ProductText>
          <BoldWrapper>Description:</BoldWrapper> {productDetail.description}
        </ProductText>
      </LeftContent>
    </ProductDetailsWrapper>
  );
};

export default ProductDetailsModal;
