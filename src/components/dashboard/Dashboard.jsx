"use client";
import React, { useState, useEffect } from "react";
import {
  ProductCardContainer,
  ProductsCardWrapper,
  Title,
  PaginationWrapper,
  PaginationBtn,
  FlexWrapper,
  NoProductText,
  Select,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import CustomModal from "../customModal/CustomModal";
import ProductDetailsModal from "../productDetails/ProductDetailsModal";
import { fetchAllProducts } from "@/services";
import { setProducts } from "@/redux/productSlice";
import ProductCard from "../productCard/ProductCard";
import Loader from "../loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";
import { categoriesData } from "@/utils/data";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [filterItem, setFilterItem] = useState("All");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productsPerPage = 10;

  const handleChange = (e) => {
    setFilterItem(e.target.value);
  };

  const handleOpenMenu = (product) => {
    setOpen(true);
    setProductDetail(product);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };

  const productsData = useSelector((state) => state.product.productsData);
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchAllProducts();
      if (data) {
        dispatch(setProducts(data));
        setFilteredProducts(
          filterItem === "All"
            ? data?.products
            : data?.products.filter(
                (product) => product.category === filterItem,
              ),
        );
      }
    } catch (e) {
      toast.error(e.message, {
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [filterItem]);

  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <FlexWrapper>
        <Title>Products</Title>
        {!loading && filteredProducts?.length !== 0 && (
          <Select onChange={handleChange} defaultValue={filterItem}>
            <option value="All">All</option>
            {categoriesData.map(({ id, name, label }) => {
              return (
                <option value={name} key={id}>
                  {label}
                </option>
              );
            })}
          </Select>
        )}
      </FlexWrapper>
      {loading ? (
        <Loader />
      ) : filteredProducts?.length !== 0 ? (
        <ProductCardContainer>
          <ProductsCardWrapper>
            {filteredProducts
              ?.slice(
                currentPage * productsPerPage,
                (currentPage + 1) * productsPerPage,
              )
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleOpenMenu={handleOpenMenu}
                />
              ))}
          </ProductsCardWrapper>
          <PaginationWrapper>
            <ReactPaginate
              previousLabel={<PaginationBtn>{"<"}</PaginationBtn>}
              nextLabel={<PaginationBtn>{">"}</PaginationBtn>}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(
                productsData?.products?.length / productsPerPage,
              )}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={({ selected }) => setCurrentPage(selected)}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </PaginationWrapper>
        </ProductCardContainer>
      ) : (
        <NoProductText>No products found</NoProductText>
      )}
      <CustomModal open={open} handleClose={handleCloseMenu}>
        <ProductDetailsModal productDetail={productDetail} />
      </CustomModal>
    </React.Fragment>
  );
};

export default Dashboard;
