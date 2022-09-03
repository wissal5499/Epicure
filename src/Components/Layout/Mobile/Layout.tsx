import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChefAllPage from "../../Chef/Mobile/ChefAllPage/ChefAllPage";
import ContactUS from "../../Footer/Mobile/ContactUS";
import Footer from "../../Footer/Mobile/FooterBtn";
import Header from "../../Header/HeaderMobile/HeaderButtons/Header";
import HomePageMobile from "../../HomePage/HomePageMobile/HomePageMobile";
import DishInfo from "../../Restaurants/RestaurantsInfo/DishesType/DishInfo/DishInfo";
import RestaurantsInfo from "../../Restaurants/RestaurantsInfo/RestaurantsInfo";
import Restaurants from "../../Restaurants/RestaurantsPage/Restaurants";
import { Container, FooterContainer } from "./styles";

export default function Layout() {
  const [openMenueList, setMenueList] = useState(false);
  const [openSearchBox, setOpenSearch] = useState(false);
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
          <Route path="contactus" element={<ContactUS />}></Route>
          <Route path="termofuse" element={<ContactUS />}></Route>
          <Route path="policy" element={<ContactUS />}></Route>
        </Routes>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </BrowserRouter>
  );
}
