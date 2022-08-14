import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, GoRestuarants } from "./styles";

interface Props {
  setMenueList: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenBag: React.Dispatch<React.SetStateAction<boolean>>;
}
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
      <img src={goRestuarants} alt="icon" />
    </ButtonContainer>
  );
}
