import React from "react";
import { useState } from "react";
import restaurant from "../../../constants/JsonFolder/Restaurant.json";
import RestaurantsDescription from "./Description/RestaurantsDescription";
import {
  Container,
  Title,
  ButtonContainer,
  AllRestaurants,
  NewRestaurants,
  MostPopularRestaurants,
  OpeningHours,
  Hr,
} from "./styles";

export default function Restaurants() {
  const restArray = restaurant.Restaurants;
  const [RestaurantsArray, setRestaurantsArray] = useState(restArray);
  const [category, setCategory] = useState("all");

  const onBtnClicked = (categoty: string) => {
    const newArray = restArray.filter((element) => {
      return element.Category == categoty;
    });
    setRestaurantsArray(newArray);
    setCategory(categoty);
  };

  return (
    <Container>
      <Title>RESTAURANTS</Title>
      <ButtonContainer>
        <AllRestaurants
          onClick={() => {
            setRestaurantsArray(restArray);
            setCategory("all");
          }}
          activeCategory={category}
        >
          All
        </AllRestaurants>
        <NewRestaurants
          onClick={() => onBtnClicked("new")}
          activeCategory={category}
        >
          New
        </NewRestaurants>
        <MostPopularRestaurants
          onClick={() => onBtnClicked("popular")}
          activeCategory={category}
        >
          Most Popular
        </MostPopularRestaurants>
        <OpeningHours
          onClick={() => onBtnClicked("open")}
          activeCategory={category}
        >
          Open Now
        </OpeningHours>
      </ButtonContainer>
      <RestaurantsDescription
        RestarauntsArray={RestaurantsArray}
      ></RestaurantsDescription>
      <Hr />
    </Container>
  );
}
