import React from "react";
import rest from "../../../constants/JsonFolder/Restaurant.json";
import GoRestuarants from "../../Buttons/GoToRestaurants";
import { settings } from "../../../constants/SliderSettings/settings";
import { Props } from "../../../interfaces/SetFunctions";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "./RestaurantsHomePage.css";
import {
  Title,
  RestElement,
  RestName,
  RestLocation,
  RestDescriptionContainer,
  RestDescription,
  Image,
  RestaurantContainer,
} from "./styles";

export default function RestaurantsHomePage(props: Props) {
  return (
    <RestaurantContainer>
      <Title>popular restaurant in epicure:</Title>
      <Slider {...settings}>
        {rest.Restaurants.map((element, key) => (
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
      </Slider>
      <GoRestuarants
        setMenueList={props.setMenueList}
        setOpenSearch={props.setOpenSearch}
        setOpenBag={props.setOpenBag}
      />
    </RestaurantContainer>
  );
}
