import React from "react";
import rest from "../../../constants/JsonFolder/Restaurant.json";
import GoRestuarants from "../../Buttons/GoToRestaurants";
import { settings } from "../../../constants/SliderSettings/settings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RestaurantsHomePage.css";

import {
  Title,
  RestElement,
  RestName,
  RestLocation,
  RestDescription,
} from "./styles";

interface Props {
  setMenueList: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenBag: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function RestaurantsHomePage(props: Props) {
  return (
    <div>
      <Title>popular restaurant in epicure:</Title>
      <Slider {...settings}>
        {rest.Restaurants.map((element, key) => (
          <RestElement key={key}>
            <img src="./Images/claro.svg" alt="restaurant image" />
            <RestDescription>
              <div style={{ marginLeft: "5%" }}>
                <RestName>{element.name}</RestName>
                <RestLocation>{element.location}</RestLocation>
              </div>
            </RestDescription>
          </RestElement>
        ))}
      </Slider>

      <GoRestuarants
        setMenueList={props.setMenueList}
        setOpenSearch={props.setOpenSearch}
        setOpenBag={props.setOpenBag}
      />
    </div>
  );
}
