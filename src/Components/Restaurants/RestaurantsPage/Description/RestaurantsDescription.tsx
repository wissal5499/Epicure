import React from "react";
import {
  RestImage,
  RestDetailsContainer,
  RestName,
  RestLocation,
  RestDetails,
  RestContainer,
  Restaurant,
} from "./styles";

interface Rest {
  name: string;
  location: string;
  image: string;
}

interface Props {
  RestarauntsArray: Array<Rest>;
}

export default function RestaurantsDescription(props: Props) {
  return (
    <RestContainer>
      {props.RestarauntsArray.map((element, key) => (
        <Restaurant key={key}>
          <RestImage src={element.image} alt="rest image" />
          <RestDetailsContainer>
            <RestDetails>
              <RestName>{element.name}</RestName>
              <RestLocation>{element.location}</RestLocation>
            </RestDetails>
          </RestDetailsContainer>
        </Restaurant>
      ))}
    </RestContainer>
  );
}
