import React from "react";
import {
  CategoryContainer,
  Title,
  CategoryElement,
  CategoryName,
  Button,
} from "./styles";

export default function DishCategory() {
  return (
    <div>
      <CategoryContainer>
        <Title>Signature Dish Of:</Title>
        <CategoryElement>
          <Button>
            <img src="./Images/SpicyBig.svg" alt=" Spicy icon" />
          </Button>
          <CategoryName>Spicy</CategoryName>
        </CategoryElement>
        <CategoryElement>
          <img src="./Images/VegitarianBig.svg" alt="Vegitarian icon " />
          <CategoryName>Vegitarian</CategoryName>
        </CategoryElement>
        <CategoryElement>
          <img src="./Images/VeganBig.svg" alt="Vegan icon " />
          <CategoryName>Vegan</CategoryName>
        </CategoryElement>
      </CategoryContainer>
    </div>
  );
}
