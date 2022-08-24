import React from "react";
import rest from "../../../constants/JsonFolder/Restaurant.json";
import GoToRestaurants from "../../Buttons/Desktop/GoToRestaurants";
import {
  Title,
  RestElement,
  RestName,
  RestLocation,
  RestDescriptionContainer,
  RestDescription,
  Image,
  RestaurantContainer,
  Container,
} from "./styles";

export default function RestaurantsHomePage() {
  return (
    <Container>
      <Title>popular restaurant in epicure:</Title>
      <RestaurantContainer>
        {rest.Restaurants.slice(0, 3).map((element, key) => (
          <RestElement key={key}>
            <Image src={element.image} alt="restaurant image" />
            <RestDescriptionContainer>
              <RestDescription>
                <RestName>{element.name}</RestName>
                <RestLocation>{element.location}</RestLocation>
              </RestDescription>
            </RestDescriptionContainer>
          </RestElement>
        ))}
      </RestaurantContainer>
      <GoToRestaurants />
    </Container>
  );
}
