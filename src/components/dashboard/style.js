"use client";
import styled from "styled-components";

export const Title = styled.h1`
  margin-left: 20px;
`;

export const ProductCardContainer = styled.div`
  margin-top: 40px;
`;

export const ProductsCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;

  @media (max-width: 600px) {
    margin: 0 20px;
    gap: 20px;
  }
`;
