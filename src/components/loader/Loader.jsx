import React from "react";
import { Skeleton } from "@mui/material";
import { LoaderWrapper, SkeletonContainer } from "./style";

const Loader = () => {
  const data = [1, 2, 3, 4];
  return (
    <LoaderWrapper>
      {data.map((index) => {
        return (
          <SkeletonContainer key={index}>
            <Skeleton height={350} width={"100%"} animation="wave" />
          </SkeletonContainer>
        );
      })}
    </LoaderWrapper>
  );
};

export default Loader;
