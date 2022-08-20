import React from "react";
import Restaurants from "../../constants/JsonFolder/Restaurant.json";
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
  CategoryImage,
  DishDescriptionContainer,
  DishContainer,
  DishImage,
  DishDescription,
  Container,
} from "./styles";

interface Props {
  setMenueList: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenBag: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function DishesHomePage(props: Props) {
  return (
    <Container>
      <Title>Signature Dish Of:</Title>
      <Slider {...settings}>
        {Restaurants.Restaurants.map((element, key) =>
          element.meals?.map((element, key) => (
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
