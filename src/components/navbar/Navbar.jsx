import React from "react";
import { LogoWrapper, NavWrapper, NavText } from "./style";
import Image from "next/image";
import logo from "../../../public/images/logo.jpeg";

const Navbar = () => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <Image src={logo} height={50} />
      </LogoWrapper>
      <NavText>Codemania Products</NavText>
    </NavWrapper>
  );
};

export default Navbar;
