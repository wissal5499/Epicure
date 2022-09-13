import styled from "styled-components";

export const DishContainer= styled.div`
    margin-left: 5%;
`
export const Form= styled.form`
`
export const DishImage= styled.img`
    width: 100%;
    margin-left: -1px;
`
export const DishName= styled.p`
    width: 318px;
    height: 26px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 2.67px;
    color: #000000;
`
export const DishDescription= styled.p`
    width: 318px;
    height: 54px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 1.97px;
    color: #000000;
    margin-bottom: 40px;
`
export const OptionContainer= styled.div`
    margin-bottom: 20px;
`
export const Container= styled.div`
    margin-bottom: 40px;
`
export const Input= styled.input`
`
export const Label= styled.label`
    width: 110px;
    height: 18px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
`
interface ParagraphProps{
    activePara: string;
}
export const Title= styled.p<ParagraphProps>`
    width: 146px;
    height: 18px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 18px;
    text-align: left;
    letter-spacing: 1.97px;
    color: #000000;
    text-decoration: ${props=> props.activePara=='paragraph'? 'underline': "none"};
    text-decoration-color: ${props=> props.activePara=='paragraph'? 'rgba(222, 146, 0, 0.9)': "none"};
    border-width: ${props=> props.activePara=='paragraph'? '1px': "none"};
    text-underline-offset: ${props=> props.activePara=='paragraph'? '6px': "none"};

`
export const ButtonPlusMunis= styled.button`
    background-color: transparent;
    border: none;
    font-size: 20px;
`
export const QuantityInput= styled.input`
    border: none;
    width: 8%;
    text-align: center;
`
export const ContainerBtn= styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
export const AddToCart= styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 24px;
    gap: 10px;
    width: 206px;
    height: 48px;
    background: #000000;
    border: 1px solid #000000;

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 40px;
    margin-top: 25px;
`