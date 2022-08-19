import React from "react";
import chefs from "../../../constants/JsonFolder/chefs.json";
import Slider from "react-slick";
import { settings } from "../../../constants/SliderSettings/settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Meals.css";
import {
  Title,
  MealContainer,
  MealDescription,
  MealImage,
  MealName,
} from "./styles";

export default function Meals() {
  return (
    <div>
      <Title>Chef of the week:</Title>
      <Slider {...settings}>
        {chefs.chefs.map((element, key) =>
          element.meals.map((element, key) => (
            <div>
              <MealImage src={element.image} alt="meal image" />
              <MealContainer key={key}>
                <MealDescription style={{ background: "#F9F4EA" }}>
                  <MealName>{element.name}</MealName>
                </MealDescription>
              </MealContainer>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}
