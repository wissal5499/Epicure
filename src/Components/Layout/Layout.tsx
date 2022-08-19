import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/HeaderMobile/HeaderButtons/Header";
import HomePageMobile from "../HomePage/HomePageMobile/HomePageMobile";
import Restaurants from "../Restaurants/RestaurantsPage/Restaurants";
import { Container } from "./styles";

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
        </Routes>
        <div style={{ marginLeft: "5%" }}>
          <Footer />
        </div>
      </Container>
    </BrowserRouter>
  );
}
