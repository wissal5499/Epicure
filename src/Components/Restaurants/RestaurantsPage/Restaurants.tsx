import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
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
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const [RestaurantsArray, setRestaurantsArray]: any = useState(restaurants);
  const [category, setCategory] = useState("all");

  const SetFilteredArray = (category: string) => {
    const newArray = restaurants.filter((element: any) => {
      return element.category == category;
    });
    setRestaurantsArray(newArray);
    setCategory(category);
  };
  // useEffect(() => {
  //   RestaurantsArray?.length > 0
  //     ? setRestaurantsArray(RestaurantsArray)
  //     : setRestaurantsArray(restaurants);
  // });

  return (
    <Container>
      <RestaurantsContainer>
        <Title>RESTAURANTS</Title>
        <ButtonContainer>
          <AllRestaurants
            onClick={() => {
              setRestaurantsArray(restaurants);
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
