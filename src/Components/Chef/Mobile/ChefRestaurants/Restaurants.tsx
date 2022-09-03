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

export interface Props {
  chefName: String;
}

export default function Restaurants() {
  const restaurants = useSelector((state: any) => state.restaurants.value);
  // console.log(props.chefName);
  // const FilteredArray = restaurants.filter((res: any, key: Number) => {
  //   return res.chefName == props.chefName;
  // });

  return (
    <ChefRestaurants>
      <Title>Chef of the week:</Title>
      <Slider {...settings}>
        {restaurants.map((element: any, key: any) => (
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
