import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChefAllPage from "../../Chef/Mobile/ChefAllPage/ChefAllPage";
import ContactUS from "../../Footer/Mobile/ContactUS";
import Footer from "../../Footer/Mobile/FooterBtn";
import Policy from "../../Footer/Mobile/Policy";
import TermOfUse from "../../Footer/Mobile/TermOfUse";
import Header from "../../Header/HeaderMobile/HeaderButtons/Header";
import HomePageMobile from "../../HomePage/HomePageMobile/HomePageMobile";
import LogIn from "../../Log in";
import Register from "../../../Components/Register";

import DishInfo from "../../Restaurants/RestaurantsInfo/DishesType/DishInfo/DishInfo";
import RestaurantsInfo from "../../Restaurants/RestaurantsInfo/RestaurantsInfo";
import Restaurants from "../../Restaurants/RestaurantsPage/Restaurants";
import { Container, FooterContainer } from "./styles";
import Signup from "../../Signup";

export default function Layout() {
  const [openMenueList, setMenueList] = useState(false);
  const [openSearchBox, setOpenSearch] = useState(false);
  const [openUserBox, setOpenUserBox] = useState(false);

  const [openBag, setOpenBag] = useState(false);

  return (
    <BrowserRouter>
      <Header
        openMenueList={openMenueList}
        setMenueList={setMenueList}
        openSearchBox={openSearchBox}
        setOpenSearch={setOpenSearch}
        openBag={openBag}
        setOpenBag={setOpenBag}
        openUserBox={openUserBox}
        setOpenUserBox={setOpenUserBox}
      />
      <Container style={{ width: "window.innerWidth" }}>
        <Routes>
          <Route
            path=""
            element={
              <HomePageMobile
                setMenueList={setMenueList}
                setOpenSearch={setOpenSearch}
                setOpenBag={setOpenBag}
              />
            }
          ></Route>
          <Route path="restaurants" element={<Restaurants />}></Route>
          <Route path="restaurantsInfo" element={<RestaurantsInfo />}></Route>
          <Route path="dishInfo" element={<DishInfo />}></Route>
          <Route path="chefs" element={<ChefAllPage />}></Route>
          {/* <Route
            path="login"
            element={<LogIn setOpenUserBox={setOpenUserBox} />}
          ></Route> */}
          {/* <Route path="/signup" element={<Register />}></Route> */}
          <Route path="/signup" element={<Signup />}></Route>

          <Route path="contactus" element={<ContactUS />}></Route>
          <Route path="termofuse" element={<TermOfUse />}></Route>
          <Route path="policy" element={<Policy />}></Route>
        </Routes>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </BrowserRouter>
  );
}
