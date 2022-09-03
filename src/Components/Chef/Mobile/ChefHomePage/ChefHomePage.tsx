import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Restaurants from "../ChefRestaurants/Restaurants";
import {
  Title,
  Description,
  Text,
  ChefName,
  ChefContainer,
  Image,
} from "./styles";

export default function Chef() {
  const chefs = useSelector((state: any) => state.chefs.value);

  const FilteredArray = chefs.filter((chef: any, key: Number) => {
    return chef.chef_of_the_week == true;
  });

  return (
    <ChefContainer>
      <Title>Chef of the week:</Title>
      {FilteredArray.map((element: any, key: any) => (
        <Description key={key}>
          <Image src={element.image_src} alt="" />
          <ChefName>{element.chefName}</ChefName>
          <Text>{element.description}</Text>
        </Description>
      ))}

      <Restaurants />
    </ChefContainer>
  );
}
