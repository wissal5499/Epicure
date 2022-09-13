/**************************************
 ************* DON`T CHECK :)***********
 ***************************************/

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../../Footer/Desktop/Footer";
import Header from "../../Header/HeaderDesktop/HeaderButtons/Header";
import HomePageDesktop from "../../HomePage/HomePageDesktop/HomePageDesktop";
import Restaurants from "../../Restaurants/RestaurantsPage/Restaurants";
import { Container, FooterContainer } from "./styles";
export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="" element={<HomePageDesktop />}></Route>
          <Route path="restaurants" element={<Restaurants />}></Route>
        </Routes>
      </Container>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </BrowserRouter>
  );
}
