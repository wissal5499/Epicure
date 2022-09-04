import React from "react";
import Slider from "react-slick";
import { settings } from "../../../../constants/SliderSettings/settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Title,
  RestContainer,
  RestDescription,
  RestImage,
  RestName,
  Container,
  ChefRestaurants,
} from "./styles";
import { useSelector } from "react-redux";

export interface Chefs {
  chefName: String;
}

export interface Props {
  chefArray: Array<Chefs>;
}

export default function Restaurants(props: Props) {
  const restaurants = useSelector((state: any) => state.restaurants.value);

  const chefName = props.chefArray.map((chef: any, key: Number) => {
    return chef.chefName;
  });

  const FilteredArray = restaurants.filter((res: any, key: Number) => {
    return res.chefName == chefName;
  });

  return (
    <ChefRestaurants>
      <Title>Chef of the week:</Title>
      <Slider {...settings}>
        {FilteredArray.map((element: any, key: any) => (
          <Container key={key}>
            <RestImage src={element.image_src} alt="rest image" />
            <RestContainer>
              <RestDescription>
                <RestName>{element.restaurantName}</RestName>
              </RestDescription>
            </RestContainer>
          </Container>
        ))}
      </Slider>
    </ChefRestaurants>
  );
}
