import React from "react";
//import Restaurants from "../../../constants/JsonFolder/Restaurant.json";
import GoRestuarants from "../../Buttons/Mobile/GoToRestaurants";
import { settings } from "../../../constants/SliderSettings/settings";
import { Props } from "../../../interfaces/SetFunctions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DishesHomePage.css";
import { useSelector } from "react-redux";
import {
  Title,
  MealName,
  MealDescription,
  MealPrice,
  CategoryImage,
  DishDescriptionContainer,
  DishContainer,
  DishImage,
  DishDescription,
  Container,
} from "./styles";

export default function DishesHomePage(props: Props) {
  const restaurants = useSelector((state: any) => state.restaurants.value);

  return (
    <Container>
      <Title>Signature Dish Of:</Title>
      <Slider {...settings}>
        {restaurants.map((element: any, key: number) =>
          element.dishes?.map((element: any, key: number) => (
            <DishContainer key={key}>
              <DishImage src={element.image} alt="meal image" />
              <DishDescriptionContainer>
                <DishDescription>
                  <MealName>{element.name}</MealName>
                  <MealDescription>{element.description}</MealDescription>
                  <CategoryImage src={element.category} alt="category" />
                  <MealPrice>₪{element.price}</MealPrice>
                </DishDescription>
              </DishDescriptionContainer>
            </DishContainer>
          ))
        )}
      </Slider>
      <GoRestuarants
        setMenueList={props.setMenueList}
        setOpenSearch={props.setOpenSearch}
        setOpenBag={props.setOpenBag}
      />
    </Container>
  );
}
