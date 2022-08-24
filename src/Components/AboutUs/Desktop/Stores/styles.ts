import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2%;
    margin-left: 8%;
`
export const StoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Text = styled.p`
    width: 140px;
    height: 18px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.29px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
`
export const StoreElement = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    border: 1px solid black;
    width: 15%;
    height: 60px;
    border-radius: 10px;
    padding-left: 5px;
`
export const Image= styled.img`
    width: 30px;
    height: 30px;
    margin-top: 10px;
`