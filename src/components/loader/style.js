import styled from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    margin: 0 20px;
  }
`;

export const SkeletonContainer = styled.div`
  width: 320px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
