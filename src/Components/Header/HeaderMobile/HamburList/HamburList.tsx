import React from "react";
import Footer from "../../../Footer/Footer";
import { XURL } from "../../../../constants/imagesURL.ts/XURL";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  Headerbutton,
  ListMenue,
  ButtonElement,
  Hr,
} from "./styles";

interface Props {
  CloseMenueList: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburList(props: Props) {
  const navigate = useNavigate();
  const onButtonClicked = () => {
    navigate("/restaurants");
    props.CloseMenueList(false);
  };
  return (
    <HeaderContainer>
      <Headerbutton
        className="X__Element"
        onClick={() => {
          props.CloseMenueList(false);
        }}
      >
        <img src={XURL} alt="X icon"></img>
      </Headerbutton>
      <br />
      <br />
      <ListMenue>
        <ButtonElement onClick={onButtonClicked}>Restaurants</ButtonElement>
        <ButtonElement>Chefs</ButtonElement>
        <br />
      </ListMenue>
      <Hr />
      <div onClick={() => props.CloseMenueList(false)}>
        <Footer />
      </div>
    </HeaderContainer>
  );
}
