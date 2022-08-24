import React from "react";
import Restaurants from "../../../constants/JsonFolder/Restaurant.json";

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
  DishElement,
} from "./styles";

export default function DishesHomePage() {
  return (
    <Container>
      <Title>Signature Dish Of:</Title>
      <DishContainer>
        {Restaurants.Restaurants.slice(0, 3).map((element, key) =>
          element.meals?.map((element, key) => (
            <DishElement key={key}>
              <DishImage src={element.image} alt="meal image" />
              <DishDescriptionContainer>
                <DishDescription>
                  <MealName>{element.name}</MealName>
                  <MealDescription>{element.description}</MealDescription>
                  <CategoryImage src={element.category} alt="category" />
                  <MealPrice>₪{element.price}</MealPrice>
                </DishDescription>
              </DishDescriptionContainer>
            </DishElement>
          ))
        )}
      </DishContainer>
    </Container>
  );
}
