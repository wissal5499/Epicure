import React, { useState } from "react";
import DishesHomePage from "../../Dishes/DishesHomePage";
import SearchBox from "../../SearchBox/SearchBox";
import RestauransHomePage from "../../Restaurants/RestaurantsHomePage/RestuarantsHomePage";
import DishCategory from "../../DishCategory/DishCategory";
import Chef from "../../Chef/Chef/Chef";
import AboutUs from "../../AboutUs/AboutUs/AboutUs";
import Meals from "../../Chef/ChefRestaurants/Restaurants";
import { Container, BodyContainer } from "./styles";
import { Props } from "../../../interfaces/SetFunctions";

export default function HomePageMobile(props: Props) {
  return (
    <Container>
      <SearchBox />
      <BodyContainer>
        <RestauransHomePage
          setMenueList={props.setMenueList}
          setOpenSearch={props.setOpenSearch}
          setOpenBag={props.setOpenBag}
        />
        <DishesHomePage
          setMenueList={props.setMenueList}
          setOpenSearch={props.setOpenSearch}
          setOpenBag={props.setOpenBag}
        />
        <DishCategory />
        <Chef />
        <Meals />
      </BodyContainer>
      <AboutUs />
    </Container>
  );
}
