import React from "react";
import { useState } from "react";
import restaurant from "../../../constants/JsonFolder/Restaurant.json";
import { useNavigate } from "react-router-dom";
//import "./Restaurants.css";
import {
  Container,
  Title,
  ButtonContainer,
  AllRestaurants,
  NewRestaurants,
  MostPopularRestaurants,
  OpeningHours,
  RestImage,
  RestDetailsContainer,
  RestName,
  RestLocation,
  RestContainer,
  ImageButton,
  RestDetails,
  BodyContainer,
  Hr,
} from "./styles";

export default function Restaurants() {
  const navigate = useNavigate();
  const restArray = restaurant.Restaurants;
  const [RestaurantsArray, setRestaurantsArray] = useState(restArray);
  const [active, setActive] = useState("all");

  const onBtnClicked = () => {
    const newArray = restArray.filter((element) => {
      return element.Category == "New";
    });
    setRestaurantsArray(newArray);
    setActive("new");
  };

  const onBtnClicked2 = () => {
    const newArray = restArray.filter((element) => {
      return element.Category == "Most Popular";
    });
    setRestaurantsArray(newArray);
    setActive("popular");
  };

  const onBtnClicked3 = () => {
    const newArray = restArray.filter((element) => {
      return element.Category == "Open Now";
    });
    setRestaurantsArray(newArray);
    setActive("open");
  };

  const handlerBtn = () => {
    setRestaurantsArray(restArray);
    setActive("all");
  };
  const ShowMoreInfo = () => {
    navigate("/restaurantsInfo");
  };

  return (
    <Container>
      <Title>RESTAURANTS</Title>
      <ButtonContainer>
        <AllRestaurants onClick={handlerBtn} active={active}>
          All
        </AllRestaurants>
        <NewRestaurants onClick={onBtnClicked} active={active}>
          New
        </NewRestaurants>
        <MostPopularRestaurants onClick={onBtnClicked2} active={active}>
          Most Popular
        </MostPopularRestaurants>
        <OpeningHours onClick={onBtnClicked3} active={active}>
          Open Now
        </OpeningHours>
      </ButtonContainer>
      <br />
      <RestContainer className="cards">
        {RestaurantsArray.map((element, key) => (
          <div key={key} className="card">
            <ImageButton onClick={ShowMoreInfo}>
              <RestImage src={element.image} alt="rest image" />
            </ImageButton>
            <RestDetailsContainer>
              <RestDetails>
                <RestName>{element.name}</RestName>
                <RestLocation>{element.location}</RestLocation>
              </RestDetails>
            </RestDetailsContainer>
          </div>
        ))}
      </RestContainer>
      <br />
      <div>
        <Hr />
      </div>
      <br />
    </Container>
  );
}
