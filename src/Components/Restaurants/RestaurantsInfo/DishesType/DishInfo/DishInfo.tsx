import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { dishes } from "../../../RestaurantsPage/Description/RestaurantsDescription";
import { Hr } from "../../../RestaurantsPage/styles";
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
  Container,
  ContainerBtn,
  ButtonPlusMunis,
  QuantityInput,
  AddToCart,
} from "./styles";
import { decrement, increment } from "./counterSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function DishInfo() {
  const location = useLocation();
  const dishInfo = location.state as dishes;
  const dispatch = useDispatch();
  const quantity = useSelector((state: any) => state.quantity.value);

  return (
    <div>
      <DishImage src={dishInfo.image_src} alt="dish image" />
      <DishContainer>
        <DishName>{dishInfo.dishName}</DishName>
        <DishDescription>{dishInfo.description}</DishDescription>
        <Form>
          <Container>
            <Title activePara="paragraph">Choose a side</Title>
            <OptionContainer>
              <Input type="radio" name="radiobtn" value="bread" /> 
              <Label>White bread</Label>
            </OptionContainer>
            <OptionContainer>
              <Input type="radio" name="radiobtn" value="bread" /> 
              <Label>Sticky rice</Label>
            </OptionContainer>
          </Container>
          <Container>
            <Title activePara="paragraph">Changes</Title>
            <OptionContainer>
              <Input type="checkbox" id="" name="" value="Bike" />
              <Label> Whithout peanuts</Label>
            </OptionContainer>
            <OptionContainer>
              <Input type="checkbox" id="" name="" value="Bike" />
              <Label> Sticky Less spicy</Label>
            </OptionContainer>
          </Container>
        </Form>

        <Title activePara="paragraph">Quantity</Title>
        <ContainerBtn>
          <ButtonPlusMunis onClick={() => dispatch(decrement())}>
            -
          </ButtonPlusMunis>
          <div>{quantity}</div>

          <ButtonPlusMunis onClick={() => dispatch(increment())}>
            +
          </ButtonPlusMunis>
        </ContainerBtn>

        <AddToCart>Add to bag</AddToCart>
        <Hr />
      </DishContainer>
    </div>
  );
}
