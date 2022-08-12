import React, { useState } from "react";
import Bag from "../Bag/Bag";
import Search from "../SearchHeader/SearchHeader";
import HeaderList from "../HamburList/HamburList";
import { hambur } from "../../../../constants/imagesURL.ts/hamburURL";
import { sitelogo } from "../../../../constants/imagesURL.ts/sitelogoURL";
import { searchURL } from "../../../../constants/imagesURL.ts/searchURL";
import { userURL } from "../../../../constants/imagesURL.ts/userURL";
import { bagURL } from "../../../../constants/imagesURL.ts/bagURL";

import {
  HeaderContainer,
  NavContainer,
  GroupIcons,
  Headerbutton,
  LogoButton,
} from "./styles";
import SearchHeader from "../SearchHeader/SearchHeader";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [openMenueList, setMenueList] = useState(false);
  const [openSearchBox, setOpenSearch] = useState(false);
  const [openBag, setOpenBag] = useState(false);
  const navigate = useNavigate();

  const onChangeClicked = () => {
    setOpenBag(openBag === false ? true : false);
  };

  const onBtnClicked = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      {!openMenueList && !openSearchBox && (
        <NavContainer>
          <Headerbutton
            onClick={() => {
              setMenueList(true);
            }}
          >
            <img src={hambur} alt="hambur icon" />
          </Headerbutton>
          <LogoButton onClick={onBtnClicked} style={{ marginLeft: "24%" }}>
            <img src={sitelogo} alt="logo icon" />
          </LogoButton>
          <GroupIcons>
            <Headerbutton
              onClick={() => {
                setOpenSearch(true);
              }}
            >
              <img src={searchURL} alt="search icon" />
            </Headerbutton>
            <Headerbutton>
              <img src={userURL} alt="user icon" />
            </Headerbutton>
            <Headerbutton onClick={onChangeClicked}>
              <img src={bagURL} alt="bag icon" />
            </Headerbutton>
          </GroupIcons>
        </NavContainer>
      )}
      <div>{openMenueList && <HeaderList CloseMenueList={setMenueList} />}</div>
      <div>
        {openSearchBox && <SearchHeader CloseSearchBox={setOpenSearch} />}
      </div>
      <div>{openBag && <Bag CloseBagBox={setOpenBag} />}</div>
    </HeaderContainer>
  );
}
