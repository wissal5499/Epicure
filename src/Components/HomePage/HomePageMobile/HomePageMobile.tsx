import React, { useEffect } from "react";
import DishesHomePage from "../../Dishes/Mobile/DishesHomePage";
import SearchBox from "../../SearchBox/Mobile/SearchBox";
import RestauransHomePage from "../../Restaurants/RestaurantsHomePage/RestuarantsHomePage";
import DishCategory from "../../DishCategory/Mobile/DishCategory";
import Chef from "../../Chef/Mobile/ChefHomePage/ChefHomePage";
import AboutUs from "../../AboutUs/Mobile/AboutUs/AboutUs";
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
      </BodyContainer>
      <AboutUs />
    </Container>
  );
}
