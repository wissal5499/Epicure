import React from "react";
import { useLocation } from "react-router-dom";
import { Restaurants } from "../RestaurantsPage/Description/RestaurantsDescription";
import DishesType from "./DishesType/DishesType";
import {
  RestName,
  RestImage,
  RestLocation,
  OpenTime,
  RestDetails,
  Status,
  Clock,
  RestContainer,
} from "./styles";

export default function RestaurantsInfo() {
  const location = useLocation();
  const restaurantInfo = location.state as Restaurants;

  return (
    <RestContainer>
      <RestImage src={restaurantInfo.image} alt="rest image" />
      <RestDetails>
        <RestName>{restaurantInfo.name}</RestName>
        <RestLocation>{restaurantInfo.location}</RestLocation>
        <OpenTime>
          <Clock src="./Images/Restaurants/clock.svg" alt="clock" />
          <Status>{restaurantInfo.OpeningHours}</Status>
        </OpenTime>
      </RestDetails>
      <DishesType />
    </RestContainer>
  );
}
