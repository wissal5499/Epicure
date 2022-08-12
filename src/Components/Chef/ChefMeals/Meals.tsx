import React from "react";
import chefs from "../../../constants/JsonFolder/chefs.json";
import {
  Title,
  MealContainer,
  MealDescription,
  MealImage,
  MealName,
} from "./styles";

export default function Meals() {
  return (
    <div>
      <Title>Chef of the week:</Title>
      <MealContainer>
        {chefs.chefs.map((element, key) =>
          element.meals.map((element, key) => (
            <MealDescription key={key}>
              <MealImage src={element.image} alt="meal image" />
              <div style={{ background: "#F9F4EA" }}>
                <MealName>{element.name}</MealName>
              </div>
            </MealDescription>
          ))
        )}
      </MealContainer>
    </div>
  );
}
