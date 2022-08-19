import React from "react";
import chefs from "../../../constants/JsonFolder/chefs.json";
import Slider from "react-slick";
import { settings } from "../../../constants/SliderSettings/settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Restaurants.css";
import {
  Title,
  RestContainer,
  RestDescription,
  RestImage,
  RestName,
  Container,
  Restaurant,
} from "./styles";

export default function Restaurants() {
  return (
    <Restaurant>
      <Title>Chef of the week:</Title>
      <Slider {...settings}>
        {chefs.chefs.map((element, key) =>
          element.restaurant.map((element, key) => (
            <Container key={key}>
              <RestImage src={element.image} alt="rest image" />
              <RestContainer>
                <RestDescription style={{ background: "#F9F4EA" }}>
                  <RestName>{element.name}</RestName>
                </RestDescription>
              </RestContainer>
            </Container>
          ))
        )}
      </Slider>
    </Restaurant>
  );
}
