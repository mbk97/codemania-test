"use client";
import styled from "styled-components";

export const Card = styled.div`
  width: 18.75rem;
  height: 28rem;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const CardImage = styled.img`
  height: 150px;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;

export const CardHeader = styled.div``;

export const CardBody = styled.div`
  padding: 5px 10px 0px 10px;
  height: 220px;
`;

export const ProductTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
`;
export const CardTextOne = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;
export const CardTextTwo = styled.p`
  font-size: 1rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;
export const ViewButton = styled.button`
  height: 30px;
  width: 130px;
  background-color: black;
  color: white;
  outline: 0;
  border: 0;
  border-radius: 9px;
  cursor: pointer;
  font-weight: 500;
`;
