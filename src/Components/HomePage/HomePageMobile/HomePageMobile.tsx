import React, { useState } from "react";
import DishesHomePage from "../../Meals/DishesHomePage";
import SearchBox from "../../SearchBox/SearchBox";
import RestauransHomePage from "../../Restaurants/RestaurantsHomePage/RestuarantsHomePage";
import DishCategory from "../../DishCategory/DishCategory";
import Chef from "../../Chef/Chef/Chef";
import AboutUs from "../../AboutUs/AboutUs/AboutUs";
import Meals from "../../Chef/ChefMeals/Meals";
import { Container, BodyContainer } from "./styles";

interface Props {
  setMenueList: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenBag: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomePageMobile(props: Props) {
  return (
    <Container>
      <SearchBox />
      <br />
      <BodyContainer style={{ marginLeft: "5%" }}>
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
        <AboutUs />
      </BodyContainer>
    </Container>
  );
}
