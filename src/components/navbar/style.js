"use client";
import styled from "styled-components";
import Image from "next/image";

export const NavWrapper = styled.div`
  height: 80px;
  width: 100vw;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  margin-left: 20px;
`;

export const NavText = styled.p`
  text-transform: capitalize;
  font-size: 1.7rem;
  color: #ffffff;
  margin-right: 20px;
`;
