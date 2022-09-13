import React, { useEffect } from "react";
import DishesHomePage from "../../Dishes/Mobile/DishesHomePage";
import SearchBox from "../../SearchBox/Mobile/SearchBox";
import RestauransHomePage from "../../Restaurants/RestaurantsHomePage/RestuarantsHomePage";
import DishCategory from "../../DishCategory/Mobile/DishCategory";
import Chef from "../../Chef/Mobile/ChefHomePage/ChefHomePage";
import AboutUs from "../../AboutUs/Mobile/AboutUs/AboutUs";
import { Container, BodyContainer } from "./styles";
import { Props } from "../../../interfaces/SetFunctions";
import { useDispatch } from "react-redux";
import { setRestaurants } from "../../Restaurants/restaurantsSlicer";
import { setChefs } from "../../Chef/chefsSlicer";
import { setDishes } from "../../Dishes/dishesSlicer";

export default function HomePageMobile(props: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchFunction() {
      const restaurantsURL =
        "http://localhost:3001/api/restaurants/getRestaurants";
      const chefsURL = "http://localhost:3001/api/chefs/getChefs";
      const dishesURL = "http://localhost:3001/api/dishes/getDishes";

      const restaurants = await (await fetch(restaurantsURL)).json();
      const dishes = await (await fetch(dishesURL)).json();
      const chefs = await (await fetch(chefsURL)).json();

      dispatch(setRestaurants(restaurants));
      dispatch(setDishes(dishes));
      dispatch(setChefs(chefs));
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
      </BodyContainer>
      <AboutUs />
    </Container>
  );
}
