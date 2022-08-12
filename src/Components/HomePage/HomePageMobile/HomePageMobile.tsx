import React from "react";
import DishesHomePage from "../../Meals/DishesHomePage";
import SearchBox from "../../SearchBox/SearchBox";
import RestauransHomePage from "../../Restaurants/RestaurantsHomePage/RestuarantsHomePage";
import DishCategory from "../../DishCategory/DishCategory";
import Chef from "../../Chef/Chef/Chef";
import AboutUs from "../../AboutUs/AboutUs/AboutUs";
import Meals from "../../Chef/ChefMeals/Meals";
import { Container, BodyContainer } from "./styles";

export default function HomePage() {
  return (
    <Container>
      <SearchBox />
      <BodyContainer style={{ marginLeft: "5%" }}>
        <RestauransHomePage />
        <DishesHomePage />
        <DishCategory />
        <Chef />
        <Meals />
        <AboutUs />
      </BodyContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
