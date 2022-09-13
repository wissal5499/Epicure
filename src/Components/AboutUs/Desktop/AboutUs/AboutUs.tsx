/**************************************
 ************* DON`T CHECK :)***********
 ***************************************/

import React from "react";
import LogoSite from "../LogoSite/LogoSite";
import Stores from "../Stores/Stores";
import {
  Title,
  Text,
  TextContainer,
  BodyContainer,
  AboutContainer,
  TitleContainer,
  LogoContainer,
  About,
} from "./styles";

export default function AboutUs() {
  return (
    <BodyContainer>
      <AboutContainer>
        <TitleContainer>
          <Title>ABOUT US:</Title>
        </TitleContainer>
        <About>
          <TextContainer>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum no eu ipsum. Cras porta
              malesuada eros.
            </Text>
          </TextContainer>
          <LogoContainer>
            <LogoSite />
          </LogoContainer>
        </About>
      </AboutContainer>
      <Stores />
    </BodyContainer>
  );
}
