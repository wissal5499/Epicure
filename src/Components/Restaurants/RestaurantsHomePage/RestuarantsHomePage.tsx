import React from "react";
import rest from "../../../constants/JsonFolder/Restaurant.json";
import GoRestuarants from "../../Buttons/GoToRestaurants";

import {
  Title,
  RestContainer,
  RestElement,
  RestName,
  RestLocation,
} from "./styles";

export default function DishesHomePage() {
  return (
    <div>
      <Title>popular restaurant in epicure:</Title>
      <RestContainer>
        {rest.Restaurants.map((element, key) => (
          <RestElement key={key}>
            <img src="./Images/claro.svg" alt="restaurant image" />
            <div style={{ marginLeft: "5%" }}>
              <RestName>{element.name}</RestName>
              <RestLocation>{element.location}</RestLocation>
            </div>
          </RestElement>
        ))}
      </RestContainer>
      <GoRestuarants />
    </div>
  );
}
