import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Title,
  AllChefBtn,
  NewChefBtn,
  MostviewdBtn,
  Description,
  ChefImage,
  ChefName,
  Container,
  BtnContainer,
} from "./styles";

export default function ChefAllPage() {
  const chefs = useSelector((state: any) => state.chefs.value);
  const [chefArray, setChefArray] = useState(chefs);
  const [category, setCategory] = useState("all");

  const SetFilteredArray = (category: string) => {
    const FilteredArray = chefs.filter((element: any) => {
      return element.category == category;
    });
    setChefArray(FilteredArray);
    setCategory(category);
  };
  const SetFilteredArray2 = (mostViewd: Boolean) => {
    const FilteredArray = chefs.filter((element: any) => {
      return element.mostViewd == mostViewd;
    });
    setChefArray(FilteredArray);
    setCategory("mostviewd");
  };
  return (
    <div>
      <Container>
        <Title>CHEFS</Title>
        <BtnContainer>
          <AllChefBtn
            onClick={() => {
              setChefArray(chefs);
              setCategory("all");
            }}
            activeCategory={category}
          >
            All
          </AllChefBtn>
          <NewChefBtn
            onClick={() => SetFilteredArray("new")}
            activeCategory={category}
          >
            New
          </NewChefBtn>
          <MostviewdBtn
            onClick={() => SetFilteredArray2(true)}
            activeCategory={category}
          >
            Most Viewd
          </MostviewdBtn>
        </BtnContainer>

        {chefArray.map((element: any, key: any) => (
          <Description key={key}>
            <ChefImage src={element.image_src} alt="rest image" />
            <ChefName>{element.chefName}</ChefName>
          </Description>
        ))}
      </Container>
    </div>
  );
}
