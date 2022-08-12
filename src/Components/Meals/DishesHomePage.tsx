import React from "react";
import meal from "../../constants/JsonFolder/meal.json";
import GoRestuarants from "../Buttons/GoToRestaurants";

import {
  Title,
  MealContainer,
  MealElement,
  MealName,
  MealDescription,
  MealPrice,
  IsSpicy,
} from "./styles";

export default function DishesHomePage() {
  return (
    <div>
      <Title>Signature Dish Of:</Title>
      <MealContainer>
        {meal.resturants.map((element, key) =>
          element.meals.map((element, key) => (
            <MealElement key={key}>
              <img src={element.image} alt="meal image" />
              <div style={{ marginLeft: "5%" }}>
                <MealName>{element.name}</MealName>
                <MealDescription>{element.description}</MealDescription>
                <IsSpicy src={element.spicy} alt="" />
                <MealPrice>₪{element.price}</MealPrice>
              </div>
            </MealElement>
          ))
        )}
      </MealContainer>
      <GoRestuarants />
    </div>
  );
}
