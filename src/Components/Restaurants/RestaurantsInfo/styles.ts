import styled from "styled-components";


export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2%;
`
interface ButtonProps{
    typeCategory?: string;
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
    text-decoration: ${props=> props.typeCategory=='Breakfast'? 'underline': "none"};
    text-decoration-color: ${props=> props.typeCategory=='Breakfast'? '#DE9200': "none"};


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
    text-decoration: ${props=> props.typeCategory=='Lanch'? 'underline': "none"};
    text-decoration-color: ${props=> props.typeCategory=='Lanch'? '#DE9200': "none"};
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
    text-decoration: ${props=> props.typeCategory=='Dinner'? 'underline': "none"};
    text-decoration-color: ${props=> props.typeCategory=='Dinner'? '#DE9200': "none"};
`
export const RestImage= styled.img`
    width: 112%;
    margin-left: -6%;
`
export const RestDetails= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: -50px;
    flex: none;
    order: 12;
    align-self: stretch;
    flex-grow: 0;
    margin-top: -4px;
`
export const PriceContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const MealDetails= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    width: 335px;
    height: 140px;
    background: #F9F4EA;
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 15px;
`
export const RestName= styled.p`
    height: 2px;
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
export const MealName= styled.p`
    height: 2px;
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
export const MealIngredients= styled.p`
    height: 2px;
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
export const RestLocation= styled.p`
    height: 30px;
    height: 4px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const Price= styled.p`
    height: 30px;
    height: 4px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const OpenTime= styled.p`
    height: 30px;
    height: 4px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const RestContainer= styled.div`
    padding-right: 3px;
    margin-top: 25px;

`

