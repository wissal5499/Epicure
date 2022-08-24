import React from "react";
import { useNavigate } from "react-router-dom";
import {
  RestImage,
  RestDetailsContainer,
  RestName,
  RestLocation,
  RestDetails,
  RestContainer,
  Restaurant,
  Restaurantbtn,
} from "./styles";

export interface dishes {
  name: string;
  description: string;
  price: number;
  image: string;
}
export interface Restaurants {
  name: string;
  location: string;
  image: string;
  dishes: Array<dishes>;
  OpeningHours: String;
}

export interface Props {
  RestarauntsArray: Array<Restaurants>;
}

export default function RestaurantsDescription(props: Props) {
  const navigate = useNavigate();
  const GoTORestaurantInfo = (restaurant: Restaurants) => {
    navigate({ pathname: "/restaurantsInfo" }, { state: restaurant });
    window.scrollTo(0, 0);
  };
  return (
    <RestContainer>
      {props.RestarauntsArray.map((restaurant, key) => (
        <Restaurantbtn onClick={() => GoTORestaurantInfo(restaurant)}>
          <Restaurant key={key}>
            <RestImage src={restaurant.image} alt="rest image" />
            <RestDetailsContainer>
              <RestDetails>
                <RestName>{restaurant.name}</RestName>
                <RestLocation>{restaurant.location}</RestLocation>
              </RestDetails>
            </RestDetailsContainer>
          </Restaurant>
        </Restaurantbtn>
      ))}
    </RestContainer>
  );
}
