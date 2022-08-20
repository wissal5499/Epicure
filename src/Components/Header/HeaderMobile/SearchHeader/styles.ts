import styled from "styled-components";

export const SearchContainer = styled.div`
    position: fixed;
    z-index: 1;
    background-color: white;
    width:100%;
`
export const Searchheader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30%;
    width: 90%;
    margin-left: 5%;
    height: 46px;
`
export const SearchBox = styled.div`
    height: 250px;
`
export const XIcon = styled.img`
`
export const SearchInput = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;
    width: 78%;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    padding: 5px;
    margin-left: 5%;
    margin-top: 30px;

`
export const SearchButton = styled.button`
    border: none;
    background-color: transparent;
`
export const SearchIcon = styled.img`

`
export const Text = styled.p`
    width: 63px;
    height: 22px;
    left: 100px;
    top: 11px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
`
export const InputText=styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
`
