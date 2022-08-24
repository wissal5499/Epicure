import styled from "styled-components";

export const Background = styled.div`
    width: 1440px;
    height: 696px;
    left: 0px;
    top: 64px;
    background: url('./Images/background_desktop.svg');
`
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 36px 126px;
    gap: 18px;
    position: absolute;
    width: px;
    width: 34.5%;
    height: 180px;
    left: 332px;
    top: 38%;
    background: rgba(255,255,255,0.88);
`
export const Searchbox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;
    width: 90%;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    padding: 5px;
    margin-top: -20px;
`
export const Title=styled.p`
    width: 402px;
    height: 80px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
`
export const InputText=styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    width: 423px;
    height: 29px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.29px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 1;
`
export const SearchIcon=styled.img`
right: 0%;
top: 0%;
bottom: 0%;
margin-left: 10px;
width: 40px;
height: 30px;
`
