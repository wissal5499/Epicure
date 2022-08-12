import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/HeaderMobile/HeaderButtons/Header";
import HomePage from "../HomePage/HomePageMobile/HomePageMobile";
import RestaurantsInfo from "../Restaurants/RestaurantsInfo/RestaurantsInfo";
import Restaurants from "../Restaurants/RestaurantsPage/Restaurants";

export default function () {
  return (
    <div style={{ width: "window.innerWidth" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="restaurants" element={<Restaurants />}></Route>
          <Route path="restaurantsInfo" element={<RestaurantsInfo />}></Route>
        </Routes>
        <div style={{ marginLeft: "5%" }}>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
