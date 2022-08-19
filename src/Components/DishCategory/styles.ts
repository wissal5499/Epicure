import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: #FAFAFA;
    margin-left: -15px;
`
export const Title = styled.p`
    width: 100%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;
    text-align: center;
`

export const CategoryElement = styled.div`
    text-align: center;
`
export const Button = styled.div`
    border: none;
    background-color: transparent;
`
export const CategoryName = styled.p`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const Image = styled.img`
`