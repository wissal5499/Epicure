import React from "react";
import {
  CategoryContainer,
  Title,
  CategoryElement,
  CategoryName,
  Image,
} from "./styles";

export default function DishCategory() {
  return (
    <CategoryContainer>
      <Title>Signature Dish Of:</Title>
      <CategoryElement>
        <Image src="./Images/DishesCategory/SpicyBig.svg" alt=" Spicy icon" />
        <CategoryName>Spicy</CategoryName>
      </CategoryElement>
      <CategoryElement>
        <Image
          src="./Images/DishesCategory/VegitarianBig.svg"
          alt="Vegitarian icon"
        />
        <CategoryName>Vegitarian</CategoryName>
      </CategoryElement>
      <CategoryElement>
        <Image src="./Images/DishesCategory/VeganBig.svg" alt="Vegan icon " />
        <CategoryName>Vegan</CategoryName>
      </CategoryElement>
    </CategoryContainer>
  );
}
