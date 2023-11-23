"use client";
import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
  flex-wrap: wrap;
  gap: 20px;

  select {
    height: 40px;
    width: 200px;
    border-radius: 8px;
    cursor: pointer;
    outline: 0;
  }
`;

export const Title = styled.h1`
  margin-left: 20px;
`;

export const ProductCardContainer = styled.div`
  margin-top: 40px;

  .pagination {
    display: flex;
    width: 400px;
    align-items: center;
    gap: 10px;
    list-style: none;
    cursor: pointer;
  }
`;

export const PaginationBtn = styled.button`
  height: 30px;
  width: 120px;
  color: black;
  cursor: pointer;
  border: 0px;
  font-size: 1.5rem;
  background: transparent;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 600px) {
    margin-right: 20px;
  }

  .active {
    color: white;
    height: 20px;
    background-color: black;
    padding: 0 4px;
  }
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

export const NoProductText = styled.p`
  margin-left: 20px;
`;
