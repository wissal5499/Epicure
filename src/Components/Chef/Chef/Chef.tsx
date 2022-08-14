import React from "react";
import Restaurants from "../../../constants/JsonFolder/chefs.json";
import { Title, Description, Text, ChefName, Container } from "./styles";

export default function Chef() {
  return (
    <div>
      <Container>
        <Title>Chef of the week:</Title>
        <div>
          {Restaurants.chefs.map((element, key) => (
            <Description key={key}>
              <img src={Restaurants.chefs[0].image} alt="" />
              <ChefName>{Restaurants.chefs[0].name}</ChefName>
              <Text>{Restaurants.chefs[0].description}</Text>
            </Description>
          ))}
        </div>
      </Container>
    </div>
  );
}
