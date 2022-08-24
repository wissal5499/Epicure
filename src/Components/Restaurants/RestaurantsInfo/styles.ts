import styled from "styled-components";


export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2%;
    margin-bottom: 20px;
    margin-left: 5%;
`
interface ButtonProps{
    dishType?: string;
}

export const BreakFast = styled.button<ButtonProps>`
    background-color: transparent;
    border: none;
    height: 22px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
    text-decoration: ${props=> props.dishType=='breakfast'? 'underline': "none"};
    text-decoration-color: ${props=> props.dishType=='breakfast'? '#DE9200': "none"};
    font-weight: ${props=> props.dishType=='breakfast'? 'bold': "none"};
`
export const Lanch = styled.button<ButtonProps>`
    background-color: transparent;
    border: none;
    height: 22px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
    text-decoration: ${props=> props.dishType=='lanch'? 'underline': "none"};
    text-decoration-color: ${props=> props.dishType=='lanch'? '#DE9200': "none"};
    font-weight: ${props=> props.dishType=='lanch'? 'bold': "none"};
`
export const Dinner = styled.button<ButtonProps>`
    background-color: transparent;
    border: none;
    height: 22px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
    flex: none;
    order: 2;
    flex-grow: 0;
    text-decoration: ${props=> props.dishType=='dinner'? 'underline': "none"};
    text-decoration-color: ${props=> props.dishType=='dinner'? '#DE9200': "none"};
    font-weight: ${props=> props.dishType=='dinner'? 'bold': "none"};
`
export const RestImage= styled.img`
    width: 112%;
    margin-left: -6%;
`
export const DishImage= styled.img`
    width: 90%;
    height: 213px;
    margin-left: 5%;
`
export const RestDetails= styled.div`
    display: flex;
    flex-direction: column;
    flex: none;
    order: 12;
    align-self: stretch;
    flex-grow: 0;
    margin-left: 7%;
    margin-bottom: 15px;
`
export const PriceContainer= styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    width: 100%;
    gap: 10%;`

export const DishDetails= styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 82%;
    background: #F9F4EA;
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 25px;
    margin-left: 5%;
    margin-top: -5px;
`
export const RestName= styled.p`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    color: #000000;
`
export const DishName= styled.p`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    height: 0;
    letter-spacing: 2.67px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0; 
    margin-top: 0;
`
export const DishDescription= styled.p`
    width: 90%;
    height: 60px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`
export const RestLocation= styled.p`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
    color: #000000;
`
export const Price= styled.p`
    width: 25px;
    height: 0;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const OpenTime= styled.p`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
export const RestContainer= styled.div`
    padding-right: 3px;
    margin-top: 25px;
`
export const DishContainer= styled.div`
    display: flex;
    flex-direction: column;
`
export const Status= styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const Hr= styled.div`

width: 50px;
height: 0px;

border: 0.5px solid #979797;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 1;
`