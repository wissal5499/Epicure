import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, GoRestuarants } from "./styles";

export default function GoToRestaurants() {
  const goRestuarants = "./Images/Go.svg";
  const navigate = useNavigate();
  const onButtonClicked = () => {
    navigate("/restaurants");
  };

  return (
    <ButtonContainer>
      <GoRestuarants onClick={onButtonClicked}>All Restaurants</GoRestuarants>
      <img src={goRestuarants} alt="icon" />
    </ButtonContainer>
  );
}
