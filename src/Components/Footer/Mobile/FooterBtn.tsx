import React from "react";
import { useNavigate } from "react-router-dom";
import { FooterContainer, FooterElement } from "./styles";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <FooterElement onClick={() => navigate("./contactus")}>
        Contact Us
      </FooterElement>
      <FooterElement onClick={() => navigate("./termofuse")}>
        Term of Use
      </FooterElement>
      <FooterElement onClick={() => navigate("./policy")}>
        Privacy Policy
      </FooterElement>
    </FooterContainer>
  );
}
