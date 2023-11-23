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
import Loader from "../loader/Loader";
import { toast } from "react-toastify";

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
      if (data) {
        toast.success("Successful", {
          theme: "colored",
        });
        dispatch(setProducts(data));
      }
      setLoading(false);
    } catch (e) {
      toast.error(e.message, {
        theme: "colored",
      });
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
      {loading && <Loader />}
      {!loading && productsData?.products?.length !== 0 ? (
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
      ) : (
        <p>No product found</p>
      )}
      <CustomModal open={open} handleClose={handleCloseMenu}>
        <ProductDetailsModal productDetail={productDetail} />
      </CustomModal>
    </React.Fragment>
  );
};

export default Dashboard;
