import React from "react";
import { searchURL } from "../../../../constants/imagesURL.ts/searchURL";
import { XURL } from "../../../../constants/imagesURL.ts/XURL";
import {
  SearchContainer,
  Searchheader,
  SearchButton,
  Text,
  SearchBox,
  SearchInput,
  SearchIcon,
  InputText,
  XIcon,
} from "./styles";

interface Props {
  CloseSearchBox: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchHeader(props: Props) {
  return (
    <SearchContainer>
      <Searchheader>
        <SearchButton
          onClick={() => {
            props.CloseSearchBox(false);
          }}
        >
          <XIcon src={XURL} alt="X icon" />
        </SearchButton>
        <Text>Search</Text>
      </Searchheader>
      <SearchBox>
        <SearchInput>
          <SearchIcon src={searchURL} alt="search icon" />
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
