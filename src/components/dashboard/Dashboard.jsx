"use client";
import React, { useState, useEffect } from "react";
import { Title } from "./style";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";

const Dashboard = () => {
  const data = useSelector((state) => state.product.productsData);
  return (
    <React.Fragment>
      <Navbar />
      <Title>Products</Title>
    </React.Fragment>
  );
};

export default Dashboard;
