import React from "react";
import Image from "next/image";
import {
  Card,
  CardBody,
  CardHeader,
  CardImage,
  CardTextOne,
  CardTextTwo,
  ProductTitle,
  ViewButton,
  ButtonWrapper,
} from "./style";

const ProductCard = ({ product, handleOpenMenu }) => {
  return (
    <Card>
      <CardHeader>
        <CardImage
          src={product?.thumbnail}
          height={150}
          width={300}
          alt={product?.title}
        />
      </CardHeader>
      <CardBody>
        <ProductTitle>{product?.title}</ProductTitle>
        <CardTextTwo>Brand: {product?.brand}</CardTextTwo>
        <CardTextOne>
          CardTextOne: ${product?.price?.toLocaleString()}
        </CardTextOne>
        <CardTextOne>Discount: {product?.discountPercentage}%</CardTextOne>
        <CardTextOne>Rating: {product?.rating}</CardTextOne>

        <ButtonWrapper>
          <ViewButton onClick={() => handleOpenMenu(product)}>
            View More
          </ViewButton>
        </ButtonWrapper>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
