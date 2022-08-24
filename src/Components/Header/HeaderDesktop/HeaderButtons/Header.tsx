import React, { useState } from "react";
import { sitelogo } from "../../../../constants/imagesURL.ts/sitelogoURL";
import { searchURL } from "../../../../constants/imagesURL.ts/searchURL";
import { userURL } from "../../../../constants/imagesURL.ts/userURL";
import { bagURL } from "../../../../constants/imagesURL.ts/bagURL";
import {
  NavContainer,
  GroupIcons,
  Headerbutton,
  LogoButton,
  Icon,
  EpicureButton,
  RestButton,
  ChefButton,
  ButtonGroup,
} from "./styles";
import Bag from "../Bag/Bag";

export default function Header() {
  const [openBag, setOpenBag] = useState(false);

  const SetOpenBag = () => {
    setOpenBag(openBag === false ? true : false);
  };

  return (
    <NavContainer>
      <ButtonGroup>
        <LogoButton>
          <Icon src={sitelogo} alt="logo icon" />
        </LogoButton>
        <EpicureButton> EPICURE</EpicureButton>
        <RestButton>Restaurants</RestButton>
        <ChefButton>Chefs</ChefButton>
      </ButtonGroup>

      <GroupIcons>
        <Headerbutton>
          <Icon src={searchURL} alt="search icon" />
        </Headerbutton>
        <Headerbutton>
          <Icon src={userURL} alt="user icon" />
        </Headerbutton>
        <Headerbutton onClick={SetOpenBag}>
          <Icon src={bagURL} alt="bag icon" />
        </Headerbutton>
      </GroupIcons>
      {openBag && <Bag CloseBagBox={setOpenBag} />}
    </NavContainer>
  );
}
