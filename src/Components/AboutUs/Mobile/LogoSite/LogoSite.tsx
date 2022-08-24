import React from "react";
import { useNavigate } from "react-router-dom";
import { Logo, Image } from "./styles";

export default function LogoSite() {
  const navigate = useNavigate();
  return (
    <Logo onClick={() => navigate("/")}>
      <Image src="./Images/LogoSite.svg" alt="site logo" />
    </Logo>
  );
}
