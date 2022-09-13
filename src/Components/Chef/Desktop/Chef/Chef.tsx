/**************************************
 ************* DON`T CHECK :)***********
 ***************************************/

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
          <div>
            <Image src={element.image} alt="" />
            <ChefName>{element.name}</ChefName>
          </div>
          <Text>{element.description}</Text>
        </Description>
      ))}
    </ChefContainer>
  );
}
