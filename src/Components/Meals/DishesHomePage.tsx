import React from "react";
import Restaurants from "../../constants/JsonFolder/meal.json";
import GoRestuarants from "../Buttons/GoToRestaurants";

import {
  Title,
  MealContainer,
  MealElement,
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
      <MealContainer>
        {Restaurants.resturants.map((element, key) =>
          element.meals.map((element, key) => (
            <MealElement key={key}>
              <img src={element.image} alt="meal image" />
              <MealDescriptionContainer style={{ marginLeft: "5%" }}>
                <MealName>{element.name}</MealName>
                <MealDescription>{element.description}</MealDescription>
                <IsSpicy src={element.spicy} alt="" />
                <MealPrice>₪{element.price}</MealPrice>
              </MealDescriptionContainer>
            </MealElement>
          ))
        )}
      </MealContainer>
      <GoRestuarants
        setMenueList={props.setMenueList}
        setOpenSearch={props.setOpenSearch}
        setOpenBag={props.setOpenBag}
      />
    </div>
  );
}
