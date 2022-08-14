import React from "react";
import { FooterContainer, FooterElement } from "./styles";

export default function Footer() {
  return (
    <div>
      <FooterContainer>
        <FooterElement> Contact Us</FooterElement>
        <FooterElement> Term of Use</FooterElement>
        <FooterElement> Privacy Policy</FooterElement>
      </FooterContainer>
    </div>
  );
}
