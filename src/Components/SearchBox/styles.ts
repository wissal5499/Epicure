import styled from "styled-components";

export const BackGround = styled.div`
    width: 100%;
    height: 273px;
    background: url('./Images/hero-picture.svg');

    @media(min-width: 600px){
        background: url("./Images/background_desktop.svg");
        height: 696px;
        left: 0px;
        top: 64px;
    }
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

    @media(min-width: 600px){
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 36px 126px;
        top: 34%;
        gap: 18px;
        width: 530px;
        height: 130px;
        left: 250px;
        background: rgba(255, 255, 255, 0.88);
    }
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

    @media(min-width: 600px){
        width: 450px;
        margin-top: -30px;
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

    @media(min-width: 600px){
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
    }
`
export const InputText=styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    
`
