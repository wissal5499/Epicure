import React from "react";
import "./styles.ts";
import { StoreContainer, StoreElement, Text } from "./styles";

export default function Stores() {
  return (
    <StoreContainer>
      <StoreElement>
        <img src="./Images/GoogleApp.svg" alt="google app" />
        <Text>Get it on Google Play</Text>
      </StoreElement>
      <StoreElement>
        <img src="./Images/Apple.svg" alt="google app" />
        <Text className="content">Download on the App Store</Text>
      </StoreElement>
    </StoreContainer>
  );
}
