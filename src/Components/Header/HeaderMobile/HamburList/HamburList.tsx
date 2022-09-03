import React from "react";
import Footer from "../../../Footer/Mobile/FooterBtn";
import { XURL } from "../../../../constants/imagesURL.ts/XURL";
import { useNavigate } from "react-router-dom";
import {
  HamburContainer,
  Closebutton,
  ListMenue,
  ButtonElement,
  FotterContainer,
  Hr,
  XIcon,
} from "./styles";

interface Props {
  CloseMenueList: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburList(props: Props) {
  const navigate = useNavigate();
  const GoToRestaurantsPage = () => {
    navigate("/restaurants");
    props.CloseMenueList(false);
  };
  return (
    <HamburContainer>
      <Closebutton
        onClick={() => {
          props.CloseMenueList(false);
        }}
      >
        <XIcon src={XURL} alt="X icon" />
      </Closebutton>

      <ListMenue>
        <ButtonElement onClick={GoToRestaurantsPage}>Restaurants</ButtonElement>
        <ButtonElement
          onClick={() => {
            navigate("/chefs");
            props.CloseMenueList(false);
          }}
        >
          Chefs
        </ButtonElement>
      </ListMenue>
      <Hr />
      <FotterContainer onClick={() => props.CloseMenueList(false)}>
        <Footer />
      </FotterContainer>
    </HamburContainer>
  );
}
