import styled from "styled-components";

export const Title = styled.p`
    width: 100%;
    height: 35px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;
`
export const MealContainer =styled.div`
    display: flex;
    flex-direction: row;
    gap:5%;
    width:100%;
    overflow-x: scroll;
`
export const MealElement = styled.div`
    height: 385px;
    background: #F9F4EA;
    margin-bottom: 15px;    
`
export const MealName = styled.p`
    width: 100%;
    height: 21px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
`
export const MealDescription = styled.p`
    width: 90%;;
    height: 80px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const MealPrice = styled.p`
    width: 20%;
    height: 19px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const IsSpicy = styled.img`
    left: 0%;
    right: 10.13%;
    top: 22.68%;
    bottom: 4.26%;
`
export const MealDescriptionContainer=styled.div`
    marginLeft: 5%;
    `