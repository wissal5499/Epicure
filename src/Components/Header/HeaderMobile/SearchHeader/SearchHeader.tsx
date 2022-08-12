import React from "react";
import { searchURL } from "../../../../constants/imagesURL.ts/searchURL";
import { XURL } from "../../../../constants/imagesURL.ts/XURL";
import {
  SearchContainer,
  Searchheader,
  SearchElement,
  Text,
  SearchBox,
  SearchInput,
  InputText,
} from "./styles";
interface Props {
  CloseSearchBox: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchHeader(props: Props) {
  return (
    <SearchContainer>
      <Searchheader>
        <SearchElement
          className="X__Element"
          onClick={() => {
            props.CloseSearchBox(false);
          }}
        >
          <img src={XURL} alt="X icon"></img>
        </SearchElement>
        <Text>Search</Text>
      </Searchheader>
      <SearchBox>
        <SearchInput>
          <img id="serachIcon" src={searchURL} alt="search icon" />
          <InputText
            type="text"
            id="search"
            placeholder="Search for restaurant cuisine, chef"
          />
        </SearchInput>
      </SearchBox>
    </SearchContainer>
  );
}
