import React from "react";
import chefs from "../../../constants/JsonFolder/chefs.json";
import { Title, Description, Text, ChefName, Container } from "./styles";

export default function Chef() {
  return (
    <div>
      <Container>
        <Title>Chef of the week:</Title>
        <Description>
          <img src={chefs.chefs[0].image} alt="" />
          <ChefName>{chefs.chefs[0].name}</ChefName>
          <Text>{chefs.chefs[0].description}</Text>
        </Description>
      </Container>
    </div>
  );
}
