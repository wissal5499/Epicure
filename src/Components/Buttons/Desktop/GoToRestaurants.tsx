/**************************************
 ************* DON`T CHECK :)***********
 ***************************************/

import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, GoRestuarants, Image } from "./styles";

export default function GoToRestaurants() {
  const goRestuarants = "./Images/Go.svg";
  const navigate = useNavigate();

  const onButtonClicked = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <ButtonContainer>
      <GoRestuarants onClick={onButtonClicked}>
        All Restaurants <Image src={goRestuarants} alt="icon" />
      </GoRestuarants>
    </ButtonContainer>
  );
}
