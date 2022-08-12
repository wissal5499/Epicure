import React from "react";
import rest from "./rest.json";
import { useState } from "react";
import restaurant from "../../../constants/JsonFolder/Restaurant.json";
import {
  ButtonContainer,
  BreakFast,
  Lanch,
  RestName,
  RestImage,
  RestLocation,
  OpenTime,
  RestDetails,
  Dinner,
  MealName,
  MealIngredients,
  MealDetails,
  Price,
  PriceContainer,
} from "./styles";

export default function RestaurantsInfo() {
  const restArray = restaurant.Restaurants;
  const [typeCategory, setTypeCategory] = useState("Breakfast");
  const [MealsArray, setMealsArray] = useState(rest.meals);

  const onBtnClicked = (typeCategory: string) => {
    const FilteredArray = rest.meals.filter((element) => {
      return element.type == typeCategory;
    });
    setMealsArray(FilteredArray);
    setTypeCategory(typeCategory);
  };

  return (
    <div>
      <div>
        <RestImage src={restArray[0].image} alt="rest image" />
        <RestDetails>
          <RestName>{restArray[0].name}</RestName>
          <RestLocation>{restArray[0].location}</RestLocation>
          <OpenTime>{restArray[0].OpeningHours}</OpenTime>
        </RestDetails>
      </div>
      <br />
      <br />
      <ButtonContainer>
        <BreakFast
          onClick={() => {
            onBtnClicked("Breakfast");
          }}
          typeCategory={typeCategory}
        >
          Breakfast
        </BreakFast>
        <Lanch
          onClick={() => {
            onBtnClicked("Lanch");
          }}
          typeCategory={typeCategory}
        >
          Lanch
        </Lanch>
        <Dinner
          onClick={() => {
            onBtnClicked("Dinner");
          }}
          typeCategory={typeCategory}
        >
          Dinner
        </Dinner>
      </ButtonContainer>
      <div>
        <br />
        {MealsArray.map((element, key) => (
          <div>
            <img src={element.image} alt="rest image" />
            <MealDetails>
              <MealName>{element.name}</MealName>
              <MealIngredients>{element.Ingredients}</MealIngredients>
              <br />
              <br />
              <PriceContainer>
                <Price>₪{element.price}</Price>
              </PriceContainer>
            </MealDetails>
          </div>
        ))}
      </div>
    </div>
  );
}
