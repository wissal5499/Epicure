import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { searchURL } from "../../../constants/imagesURL.ts/searchURL";
import {
  Background,
  SearchContainer,
  Searchbox,
  Title,
  InputText,
  SearchIcon,
} from "./styles";
import { useDispatch } from "react-redux";
import { setRestaurants } from "../../Restaurants/restaurantsSlicer";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchText = useRef<any>(null);
  const restaurants = useSelector((state: any) => state.restaurants.value);

  function filterRestaurants(event: any) {
    const restaurant = restaurants.filter((element: any) => {
      return element.restaurantName
        .toLowerCase()
        .includes(searchText.current.value.toLowerCase());
    });
    dispatch(setRestaurants(restaurant));
    event.preventDefault();
  }

  useEffect(() => {
    async function fetchFunction() {
      const restaurantsURL =
        "http://localhost:3001/api/restaurants/getRestaurants";
      const response = await (await fetch(restaurantsURL)).json();
      dispatch(setRestaurants(response));
    }
    fetchFunction();
  }, []);

  return (
    <Background>
      <SearchContainer>
        <Title>Epicure works with the top cheif restaurant in Tel Aviv</Title>
        <Searchbox>
          <SearchIcon src={searchURL} alt="search icon" />
          <InputText
            type="text"
            placeholder="Search for restaurant cuisine, chef"
            onChange={filterRestaurants}
            ref={searchText}
          />
        </Searchbox>
      </SearchContainer>
    </Background>
  );
}
