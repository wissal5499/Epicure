import React from "react";
import AboutUs from "../../AboutUs/Desktop/AboutUs/AboutUs";
import Chef from "../../Chef/Desktop/Chef/Chef";
import Restaurants from "../../Chef/Desktop/ChefRestaurants/Restaurants";
import DishCategory from "../../DishCategory/Desktop/DishCategory";
import DishesHomePage from "../../Dishes/Desktop/DishesHomePage";
import RestaurantsHomePage from "../../Restaurants/Desktop/RestuarantsHomePage";
import SearchBox from "../../SearchBox/Desktop/SearchBox";
import { Container, BodyContainer } from "./styles";

export default function HomePageDesktop() {
  return (
    <Container>
      <SearchBox />
      <RestaurantsHomePage />
      <DishesHomePage />
      <DishCategory />
      <BodyContainer>
        <Chef />
        <Restaurants />
      </BodyContainer>
      <AboutUs />
    </Container>
  );
}
