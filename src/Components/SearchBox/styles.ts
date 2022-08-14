import styled from "styled-components";

export const BackGround = styled.div`
    width: 100%;
    height: 273px;
    background: url('./Images/hero-picture.svg');
`
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10% 30%;
    gap: 5%;
    width: 30%;
    height: 90px;
    top: 19%;
    position: relative;
    background: rgba(255,255,255,0.88);
    margin-left: 5%;
    margin-right: 5%;
`
export const Searchbox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;
    width: 270%;
    height: 60px;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    padding: 5px;
    `

export const Title=styled.p`
    height: 64px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
    padding-left: 10px;
    width: 290%;
`
export const InputText=styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    
`
