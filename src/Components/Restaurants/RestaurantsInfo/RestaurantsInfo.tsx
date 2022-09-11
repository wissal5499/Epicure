import React, { useState } from "react";
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
  const [openModal, setOpenModal] = useState(false);

  return (
    <RestContainer>
      <RestImage src={restaurantInfo.image_src} alt="rest image" />
      <RestDetails>
        <RestName>{restaurantInfo.restaurantName}</RestName>
        <RestLocation>{restaurantInfo.location}</RestLocation>
        <OpenTime>
          <Clock src="./Images/Restaurants/clock.svg" alt="clock" />
          <Status>{restaurantInfo.status}</Status>
        </OpenTime>
      </RestDetails>
      <DishesType />
    </RestContainer>
  );
}
