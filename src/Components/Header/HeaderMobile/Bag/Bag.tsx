import React from "react";
import { BagContainer, BagElements, Text } from "./styles";

interface Props {
  CloseBagBox: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Bag(props: Props) {
  const bag = "./Images/bagBig.svg";
  return (
    <BagContainer onClick={() => props.CloseBagBox(false)}>
      <BagElements>
        <img src={bag} alt="bag icon" />
        <Text>YOUR BAG IS EMPTY</Text>
      </BagElements>
    </BagContainer>
  );
}
