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
  OpeningRestaurants,
  RestaurantsContainer,
  Hr,
} from "./styles";

export default function Restaurants() {
  const restArray = restaurant.Restaurants;
  const [RestaurantsArray, setRestaurantsArray] = useState(restArray);
  const [category, setCategory] = useState("all");

  const SetFilteredArray = (categoty: string) => {
    const newArray = restArray.filter((element) => {
      return element.Category == categoty;
    });
    setRestaurantsArray(newArray);
    setCategory(categoty);
  };

  return (
    <Container>
      <RestaurantsContainer>
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
            onClick={() => SetFilteredArray("new")}
            activeCategory={category}
          >
            New
          </NewRestaurants>
          <MostPopularRestaurants
            onClick={() => SetFilteredArray("popular")}
            activeCategory={category}
          >
            Most Popular
          </MostPopularRestaurants>
          <OpeningRestaurants
            onClick={() => SetFilteredArray("open")}
            activeCategory={category}
          >
            Open Now
          </OpeningRestaurants>
        </ButtonContainer>

        <RestaurantsDescription
          RestarauntsArray={RestaurantsArray}
        ></RestaurantsDescription>

        <Hr />
      </RestaurantsContainer>
    </Container>
  );
}
