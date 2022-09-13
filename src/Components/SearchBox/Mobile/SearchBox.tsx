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
  SreachList,
  List,
} from "./styles";
import { useDispatch } from "react-redux";
import { setRestaurants } from "../../Restaurants/restaurantsSlicer";
import { setDishes } from "../../Dishes/dishesSlicer";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchText = useRef<any>(null);
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const dishes = useSelector((state: any) => state.dishes.value);
  const [OpenSearchList, setOpenSearchList] = useState(false);
  const [restaurantsArray, setRestArray] = useState([]);
  const [dishesArray, setDishArray] = useState([]);

  function filterRestaurants(event: any) {
    const restaurant = restaurants.filter((element: any) => {
      if (
        element.restaurantName
          .toLowerCase()
          .includes(searchText.current.value.toLowerCase())
      ) {
        return element;
      }
    });
    const dish = dishes.filter((e: any) => {
      if (
        e.dishName
          .toLowerCase()
          .includes(searchText.current.value.toLowerCase())
      ) {
        return e;
      }
    });
    setDishArray(dish);
    setRestArray(restaurant);

    // dispatch(setRestaurants(restaurant));
    // dispatch(setDishes(dish));

    // event.preventDefault();
  }

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
            onClick={() => setOpenSearchList(true)}
            ref={searchText}
          />
        </Searchbox>
      </SearchContainer>
      {OpenSearchList && (
        <SreachList>
          <List>
            <p>
              <b>restaurants:</b>
            </p>
            {restaurantsArray.map((element: any, key: number) => (
              <div key={key}>
                <p>{element.restaurantName}</p>
              </div>
            ))}
            <p>
              <b>dishes:</b>
            </p>
            {dishesArray.map((element: any, key: number) => (
              <div key={key}>
                <p>{element.dishName}</p>
              </div>
            ))}
          </List>
        </SreachList>
      )}
    </Background>
  );
}
