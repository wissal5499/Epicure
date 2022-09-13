/**************************************
 ************* DON`T CHECK :)***********
 ***************************************/

import React from "react";
import chefs from "../../../../constants/JsonFolder/chefs.json";
import {
  Title,
  RestContainer,
  RestDescription,
  RestImage,
  RestName,
  Container,
  ChefRestaurants,
  ChefContainer,
} from "./styles";

export default function Restaurants() {
  return (
    <ChefContainer>
      <Title>Yossi’s Restaurants</Title>
      <ChefRestaurants>
        {chefs.chefs.map((element, key) =>
          element.restaurant.map((element, key) => (
            <Container key={key}>
              <RestImage src={element.image} alt="rest image" />
              <RestContainer>
                <RestDescription>
                  <RestName>{element.name}</RestName>
                </RestDescription>
              </RestContainer>
            </Container>
          ))
        )}
      </ChefRestaurants>
    </ChefContainer>
  );
}
