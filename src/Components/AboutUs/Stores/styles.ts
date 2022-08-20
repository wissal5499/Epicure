import styled from "styled-components";


export const StoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Text = styled.p`
    width: 130px;
    height: 20px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 1.29px;
    color: #000000;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`
export const StoreElement = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    border: 1px solid black;
    width: 55%;
    height: 60px;
    border-radius: 10px;
    padding-left: 5px;
`
export const Image= styled.img`
`