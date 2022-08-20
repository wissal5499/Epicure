import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, GoRestuarants, Image } from "./styles";
import { Props } from "../../interfaces/SetFunctions";

export default function GoToRestaurants(props: Props) {
  const goRestuarants = "./Images/Go.svg";
  const navigate = useNavigate();

  const onButtonClicked = () => {
    navigate("/restaurants");
    props.setMenueList(false);
    props.setOpenSearch(false);
    props.setOpenBag(false);
    window.scrollTo(0, 0);
  };
  return (
    <ButtonContainer>
      <GoRestuarants onClick={onButtonClicked}>All Restaurants</GoRestuarants>
      <Image src={goRestuarants} alt="icon" />
    </ButtonContainer>
  );
}
