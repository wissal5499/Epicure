import styled from "styled-components";

export const Title = styled.p`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
`
interface ButtonProps{
    activeCategory: string;
}
export const AllChefBtn = styled.button<ButtonProps>`
    background-color: transparent;
    border: none;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 1.92px;
    text-decoration: ${props=> props.activeCategory=='all'? 'underline': "none"};
    text-decoration-color: ${props=> props.activeCategory=='all'? '#DE9200': "none"};
    font-weight: ${props=> props.activeCategory=='all'? 'bold': "none"};

`
export const NewChefBtn = styled.button<ButtonProps>`
    background-color: transparent;
    border: none;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 1.92px;
    text-decoration: ${props=> props.activeCategory=='new'? 'underline': "none"};
    text-decoration-color: ${props=> props.activeCategory=='new'? '#DE9200': "none"};
    font-weight: ${props=> props.activeCategory=='new'? 'bold': "none"};
`
export const MostviewdBtn = styled.button<ButtonProps>`
    background-color: transparent;
    border: none;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 1.92px;
    text-decoration: ${props=> props.activeCategory=='mostviewd'? 'underline': "none"};
    text-decoration-color: ${props=> props.activeCategory=='mostviewd'? '#DE9200': "none"};
    font-weight: ${props=> props.activeCategory=='mostviewd'? 'bold': "none"};
`
export const ChefImage = styled.img`

`
export const Description = styled.div`
    margin-bottom: 20px;
`
export const Container = styled.div`
    margin-left: 5%;
`
export const BtnContainer = styled.div`
    margin-bottom: 20px;
`
export const ChefName = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 47px;
    text-align: center;
    letter-spacing: 2.67px;
    color: #000000;
    background: rgba(255, 255, 255, 0.8);
    margin-top: -45px;
    z-index: 1;
    position: absolute;
    width: 90%;
`
