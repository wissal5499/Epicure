/**************************************
 ************* DON`T CHECK :)***********
 ***************************************/

import React from "react";
import "./styles.ts";
import { StoreContainer, Container, StoreElement, Text, Image } from "./styles";

export default function Stores() {
  return (
    <StoreContainer>
      <Container>
        <StoreElement>
          <Image src="./Images/Stores/GoogleApp.svg" alt="google app" />
          <Text>Get it on Google Play</Text>
        </StoreElement>
        <StoreElement>
          <Image src="./Images/Stores/Apple.svg" alt="google app" />
          <Text className="content">Download on the App Store</Text>
        </StoreElement>
      </Container>
    </StoreContainer>
  );
}
