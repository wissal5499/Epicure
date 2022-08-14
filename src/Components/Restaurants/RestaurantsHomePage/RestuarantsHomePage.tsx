import React from "react";
import rest from "../../../constants/JsonFolder/Restaurant.json";
import GoRestuarants from "../../Buttons/GoToRestaurants";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";

import "./rest.css";

import {
  Title,
  RestContainer,
  RestElement,
  RestName,
  RestLocation,
} from "./styles";

interface Props {
  setMenueList: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenBag: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function RestaurantsHomePage(props: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Title>popular restaurant in epicure:</Title>
      <Carousel>
        {rest.Restaurants.map((element, key) => (
          <RestContainer>
            <RestElement key={key}>
              <div>
                <img src="./Images/claro.svg" alt="restaurant image" />
              </div>
              <div style={{ marginLeft: "5%" }}>
                <RestName>{element.name}</RestName>
                <RestLocation>{element.location}</RestLocation>
              </div>
            </RestElement>
          </RestContainer>
        ))}
      </Carousel>

      <GoRestuarants
        setMenueList={props.setMenueList}
        setOpenSearch={props.setOpenSearch}
        setOpenBag={props.setOpenBag}
      />
    </div>
  );
}
