import React from "react";
import LogoSite from "../LogoSite/LogoSite";
import Stores from "../Stores/Stores";
import {
  Title,
  Text,
  Container,
  BodyContainer,
  About,
  LogoContainer,
} from "./styles";

export default function AboutUs() {
  return (
    <BodyContainer>
      <About>
        <LogoContainer>
          <LogoSite />
        </LogoContainer>
        <Container>
          <Stores />
          <Text>
            <Title>ABOUT US:</Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
            justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
          </Text>
        </Container>
      </About>
    </BodyContainer>
  );
}
