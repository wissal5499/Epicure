import styled from "styled-components";


export const Container = styled.div`
    margin-left: 5%;
    margin-right: 5%;
`
export const BodyContainer = styled.div`

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
`
interface ButtonProps{
    active: string;
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
    text-decoration: ${props=> props.active=='all'? 'underline': "none"};
    text-decoration-color: ${props=> props.active=='all'? '#DE9200': "none"};
    font-weight: ${props=> props.active=='all'? 'bold': "none"};
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
    text-decoration: ${props=> props.active=='new'? 'underline': "none"};
    text-decoration-color: ${props=> props.active=='new'? '#DE9200': "none"};
    font-weight: ${props=> props.active=='new'? 'bold': "none"};
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
    text-decoration: ${props=> props.active=='popular'? 'underline': "none"};
    text-decoration-color: ${props=> props.active=='popular'? '#DE9200': "none"};
    font-weight: ${props=> props.active=='popular'? 'bold': "none"};
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
    text-decoration: ${props=> props.active=='open'? 'underline': "none"};
    text-decoration-color: ${props=> props.active=='open'? '#DE9200': "none"};
    font-weight: ${props=> props.active=='open'? 'bold': "none"};
`
export const RestImage= styled.img`
    width: 100%;

`
export const RestDetailsContainer= styled.div`
    width: 96%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: -50px;
    height: 86px;
    background: #F9F4EA;
    flex: none;
    order: 12;
    align-self: stretch;
    flex-grow: 0;
    margin-top: -4px;
    margin-bottom: 10px;
`
export const RestDetails= styled.div`
    margin-left: 4%;
    display: flex;
    flex-direction: column;
    gap: 4%;
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
export const RestLocation= styled.p`
    height: 30px;
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
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-gap: 1rem;
      
      @media (min-width: 400px) 
        grid-template-columns: repeat(2, 1fr);
      
      @media (min-width: 900px) {
         grid-template-columns: repeat(3, 1fr);
`
export const ImageButton= styled.button`
    border: none;
    background-color: transparent;
`
export const Hr=styled.hr`
    width: 110%;
    height: 0px;
    border: 1px solid #F2F2F2;
    margin-left: -5%;
`

