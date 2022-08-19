import React from "react";
import Restaurants from "../../constants/JsonFolder/meal.json";
import GoRestuarants from "../Buttons/GoToRestaurants";
import { settings } from "../../constants/SliderSettings/settings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DishesHomePage.css";

import {
  Title,
  MealName,
  MealDescription,
  MealPrice,
  IsSpicy,
  MealDescriptionContainer,
} from "./styles";

interface Props {
  setMenueList: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenBag: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function DishesHomePage(props: Props) {
  return (
    <div>
      <Title>Signature Dish Of:</Title>
      <Slider {...settings}>
        {Restaurants.resturants.map((element, key) =>
          element.meals.map((element, key) => (
            <div>
              <img src={element.image} alt="meal image" />
              <MealDescriptionContainer key={key}>
                <div style={{ marginLeft: "5%" }}>
                  <MealName>{element.name}</MealName>
                  <MealDescription>{element.description}</MealDescription>
                  <IsSpicy src={element.spicy} alt="" />
                  <MealPrice>₪{element.price}</MealPrice>
                </div>
              </MealDescriptionContainer>
            </div>
          ))
        )}
      </Slider>
      <GoRestuarants
        setMenueList={props.setMenueList}
        setOpenSearch={props.setOpenSearch}
        setOpenBag={props.setOpenBag}
      />
    </div>
  );
}
