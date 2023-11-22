"use client";
import React, { useState, useEffect } from "react";
import { ProductCardContainer, ProductsCardWrapper, Title } from "./style";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import CustomModal from "../customModal/CustomModal";
import ProductDetailsModal from "../productDetails/ProductDetailsModal";
import { fetchAllProducts } from "@/services";
import { setProducts } from "@/redux/productSlice";
import ProductCard from "../productCard/ProductCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const handleOpenMenu = (product) => {
    setOpen(true);
    setProductDetail(product);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchAllProducts();
      dispatch(setProducts(data));
      setLoading(false);
    } catch (e) {
      console.error("Error", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const productsData = useSelector((state) => state.product.productsData);
  return (
    <React.Fragment>
      <Navbar />
      <Title>Products</Title>
      <ProductCardContainer>
        <ProductsCardWrapper>
          {productsData?.products?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                handleOpenMenu={handleOpenMenu}
              />
            );
          })}
        </ProductsCardWrapper>
      </ProductCardContainer>
      <CustomModal open={open} handleClose={handleCloseMenu}>
        <ProductDetailsModal productDetail={productDetail} />
      </CustomModal>
    </React.Fragment>
  );
};

export default Dashboard;
