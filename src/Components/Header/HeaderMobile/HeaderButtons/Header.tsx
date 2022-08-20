import React, { useState } from "react";
import Bag from "../Bag/Bag";
import Search from "../SearchHeader/SearchHeader";
import HeaderList from "../HamburList/HamburList";
import { hambur } from "../../../../constants/imagesURL.ts/hamburURL";
import { sitelogo } from "../../../../constants/imagesURL.ts/sitelogoURL";
import { searchURL } from "../../../../constants/imagesURL.ts/searchURL";
import { userURL } from "../../../../constants/imagesURL.ts/userURL";
import { bagURL } from "../../../../constants/imagesURL.ts/bagURL";
import SearchHeader from "../SearchHeader/SearchHeader";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  NavContainer,
  GroupIcons,
  Headerbutton,
  LogoButton,
  Icon,
} from "./styles";

interface Props {
  openMenueList: boolean;
  setMenueList: React.Dispatch<React.SetStateAction<boolean>>;
  openSearchBox: boolean;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
  openBag: boolean;
  setOpenBag: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header(props: Props) {
  const navigate = useNavigate();
  const onBtnClicked = () => {
    navigate("/");
  };
  const onChangeClicked = () => {
    props.setOpenBag(props.openBag === false ? true : false);
  };

  return (
    <HeaderContainer>
      {!props.openMenueList && !props.openSearchBox && (
        <NavContainer>
          <Headerbutton
            onClick={() => {
              props.setMenueList(true);
            }}
          >
            <Icon src={hambur} alt="hambur icon" />
          </Headerbutton>
          <LogoButton onClick={onBtnClicked} style={{ marginLeft: "24%" }}>
            <Icon src={sitelogo} alt="logo icon" />
          </LogoButton>
          <GroupIcons>
            <Headerbutton
              onClick={() => {
                props.setOpenSearch(true);
              }}
            >
              <Icon src={searchURL} alt="search icon" />
            </Headerbutton>
            <Headerbutton>
              <Icon src={userURL} alt="user icon" />
            </Headerbutton>
            <Headerbutton onClick={onChangeClicked}>
              <Icon src={bagURL} alt="bag icon" />
            </Headerbutton>
          </GroupIcons>
        </NavContainer>
      )}
      {props.openMenueList && (
        <HeaderList CloseMenueList={props.setMenueList} />
      )}
      {props.openSearchBox && (
        <SearchHeader CloseSearchBox={props.setOpenSearch} />
      )}
      {props.openBag && <Bag CloseBagBox={props.setOpenBag} />}
    </HeaderContainer>
  );
}
