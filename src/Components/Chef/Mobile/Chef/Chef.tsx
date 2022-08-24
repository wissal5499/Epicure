import React from "react";
import Restaurants from "../../../../constants/JsonFolder/chefs.json";
import {
  Title,
  Description,
  Text,
  ChefName,
  ChefContainer,
  Image,
} from "./styles";

export default function Chef() {
  return (
    <ChefContainer>
      <Title>Chef of the week:</Title>
      {Restaurants.chefs.map((element, key) => (
        <Description key={key}>
          <Image src={element.image} alt="" />
          <ChefName>{element.name}</ChefName>
          <Text>{element.description}</Text>
        </Description>
      ))}
    </ChefContainer>
  );
}
