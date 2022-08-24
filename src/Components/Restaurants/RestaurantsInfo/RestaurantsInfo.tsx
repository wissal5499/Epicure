import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Restaurants } from "../RestaurantsPage/Description/RestaurantsDescription";

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
  DishName,
  DishDescription,
  DishDetails,
  Price,
  PriceContainer,
  DishContainer,
  Status,
  DishImage,
  Hr,
} from "./styles";

export default function RestaurantsInfo() {
  const location = useLocation();
  const restaurantInfo = location.state as Restaurants;
  const [dishesArray, setDishesArray] = useState(restaurantInfo.dishes);
  const [type, setType] = useState("breakfast");

  const setDishArray = (type: string) => {
    const newArray = restaurantInfo.dishes?.filter((dish: any, key: number) => {
      return dish.type == type;
    });
    setDishesArray(newArray);
    setType(type);
  };

  return (
    <div>
      <RestImage src={restaurantInfo.image} alt="rest image" />
      <RestDetails>
        <RestName>{restaurantInfo.name}</RestName>
        <RestLocation>{restaurantInfo.location}</RestLocation>
        <OpenTime>
          <img src="./Images/Restaurants/clock.svg" alt="" />
          <Status>{restaurantInfo.OpeningHours}</Status>
        </OpenTime>
      </RestDetails>

      <ButtonContainer>
        <BreakFast onClick={() => setDishArray("breakfast")} dishType={type}>
          Breakfast
        </BreakFast>
        <Lanch onClick={() => setDishArray("lanch")} dishType={type}>
          Lanch
        </Lanch>
        <Dinner onClick={() => setDishArray("dinner")} dishType={type}>
          Dinner
        </Dinner>
      </ButtonContainer>

      <DishContainer>
        {dishesArray.map((dish, key) => (
          <div key={key}>
            <DishImage src={dish.image} alt="rest image" />
            <DishDetails>
              <DishName>{dish.name}</DishName>
              <DishDescription>{dish.description}</DishDescription>
              <PriceContainer>
                <Price>₪{dish.price}</Price>
                <Hr />
              </PriceContainer>
            </DishDetails>
          </div>
        ))}
      </DishContainer>
    </div>
  );
}
