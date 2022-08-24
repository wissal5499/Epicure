import styled from "styled-components";

export const BagContainer= styled.div`
    width: 33%;
    height: 586px;
    left: 943px;
    top: 37px;
    background: #FFFFFF;
    box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
    position: fixed;
    z-index: 1;
` 
export const BagElements= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    margin-top: 35%;
`
export const Text=styled.p`
    width: 28%;
    height: 40px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 1.97px;
    text-transform: uppercase;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
` 
export const BagImage=styled.img`
`
export const HistoryButton=styled.button`
    background-color: transparent;
    width: 176px;
    height: 35px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
    text-align: center;
    margin-top: 100px;
    margin-left: 33%;

`
