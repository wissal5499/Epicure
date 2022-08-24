import React, { useEffect, useState } from "react";
import DishesHomePage from "../../Dishes/Mobile/DishesHomePage";
import SearchBox from "../../SearchBox/Mobile/SearchBox";
import RestauransHomePage from "../../Restaurants/RestaurantsHomePage/RestuarantsHomePage";
import DishCategory from "../../DishCategory/Mobile/DishCategory";
import Chef from "../../Chef/Mobile/Chef/Chef";
import AboutUs from "../../AboutUs/Mobile/AboutUs/AboutUs";
import Meals from "../../Chef/Mobile/ChefRestaurants/Restaurants";
import { Container, BodyContainer } from "./styles";
import { Props } from "../../../interfaces/SetFunctions";
import { useDispatch } from "react-redux";
import { setRestaurants } from "../../Restaurants/restaurantsSlicer";
//import { fetchRestaurants } from "../../../constants/fetchRestaurants";

export default function HomePageMobile(props: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchFunction() {
      const response = await (
        await fetch("http://localhost:3001/api/restaurants/getRestaurants")
      ).json();
      dispatch(setRestaurants(response.container));
    }
    fetchFunction();
  }, []);

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
