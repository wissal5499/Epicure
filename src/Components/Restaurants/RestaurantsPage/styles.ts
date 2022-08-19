import styled from "styled-components";


export const Container = styled.div`
    margin-left: 5%;
    margin-right: 5%;
`

export const Title = styled.p`
    width: 100%;
    height: 5%;
    left: 19.89px;
    top: 60px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    text-transform: uppercase;
    color: #000000;
`
export const ButtonContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    gap: 2%;
    margin-bottom: 25px;
`
interface ButtonProps{
    activeCategory: string;
}

export const AllRestaurants = styled.button<ButtonProps>`
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
    text-decoration: ${props=> props.activeCategory=='all'? 'underline': "none"};
    text-decoration-color: ${props=> props.activeCategory=='all'? '#DE9200': "none"};
    font-weight: ${props=> props.activeCategory=='all'? 'bold': "none"};
`
export const NewRestaurants = styled.button<ButtonProps>`
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
    text-decoration: ${props=> props.activeCategory=='new'? 'underline': "none"};
    text-decoration-color: ${props=> props.activeCategory=='new'? '#DE9200': "none"};
    font-weight: ${props=> props.activeCategory=='new'? 'bold': "none"};
`
export const MostPopularRestaurants = styled.button <ButtonProps>`
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
    text-decoration: ${props=> props.activeCategory=='popular'? 'underline': "none"};
    text-decoration-color: ${props=> props.activeCategory=='popular'? '#DE9200': "none"};
    font-weight: ${props=> props.activeCategory=='popular'? 'bold': "none"};
`
export const OpeningHours = styled.button<ButtonProps>`
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
    order: 3;
    flex-grow: 0;
    text-decoration: ${props=> props.activeCategory=='open'? 'underline': "none"};
    text-decoration-color: ${props=> props.activeCategory=='open'? '#DE9200': "none"};
    font-weight: ${props=> props.activeCategory=='open'? 'bold': "none"};
`
export const Hr=styled.hr`
    width: 110%;
    height: 0px;
    border: 1px solid #F2F2F2;
    margin-left: -5%;
    margin-top: 25px;
    margin-bottom: 25px;
`

