import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  dishes,
  Restaurants,
} from "../../RestaurantsPage/Description/RestaurantsDescription";
import {
  ButtonContainer,
  BreakFast,
  Lanch,
  Dinner,
  DishName,
  DishDescription,
  DishDetails,
  Price,
  PriceContainer,
  DishContainer,
  DishImage,
  Hr,
} from "./styles";

export default function DishesType() {
  const navigate = useNavigate();
  const location = useLocation();
  const restaurantInfo = location.state as Restaurants;
  const [type, setType] = useState("breakfast");

  const FilteredDishesArray = restaurantInfo.dishes?.filter(
    (e: any, key: number) => {
      return e.type === type;
    }
  );
  const GoToDishInfo = (dish: dishes) => {
    navigate({ pathname: "/dishInfo" }, { state: dish });
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <ButtonContainer>
        <BreakFast onClick={() => setType("breakfast")} dishType={type}>
          Breakfast
        </BreakFast>
        <Lanch onClick={() => setType("lunch")} dishType={type}>
          Lanch
        </Lanch>
        <Dinner onClick={() => setType("dinner")} dishType={type}>
          Dinner
        </Dinner>
      </ButtonContainer>

      {FilteredDishesArray.map((dish, key) => (
        <DishContainer
          key={key}
          onClick={() => {
            GoToDishInfo(dish);
          }}
        >
          <DishImage src={dish.image_src} alt="rest image" />
          <DishDetails>
            <DishName>{dish.dishName}</DishName>
            <DishDescription>{dish.description}</DishDescription>
            <PriceContainer>
              <Price>₪{dish.price}</Price>
              <Hr />
            </PriceContainer>
          </DishDetails>
        </DishContainer>
      ))}
    </div>
  );
}
