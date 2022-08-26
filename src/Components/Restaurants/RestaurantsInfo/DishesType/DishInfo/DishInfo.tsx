import React from "react";
import { useLocation } from "react-router-dom";
import { dishes } from "../../../RestaurantsPage/Description/RestaurantsDescription";
import {
  DishContainer,
  DishDescription,
  DishImage,
  DishName,
  OptionContainer,
  Form,
  Input,
  Label,
  Title,
} from "./styles";

export default function DishInfo() {
  const location = useLocation();
  const dishInfo = location.state as dishes;
  return (
    <div>
      <DishImage src={dishInfo.image} alt="dish image" />
      <DishContainer>
        <DishName>{dishInfo.name}</DishName>
        <DishDescription>{dishInfo.description}</DishDescription>
        <Form>
          <Title>Choose a side</Title>
          <OptionContainer>
            <Input type="radio" name="" value="bread" /> 
            <Label>White bread</Label>
          </OptionContainer>
          <OptionContainer>
            <Input type="radio" name="" value="bread" /> 
            <Label>Sticky rice</Label>
          </OptionContainer>

          <Title>Changes</Title>
          <OptionContainer>
            <Input type="checkbox" id="" name="" value="Bike" />
            <Label> Whithout peanuts</Label>
          </OptionContainer>
          <OptionContainer>
            <Input type="checkbox" id="" name="" value="Bike" />
            <Label> Sticky Less spicy</Label>
          </OptionContainer>
        </Form>
      </DishContainer>
    </div>
  );
}
