import styled from "styled-components";


export const Container = styled.div`
    margin-left: 5%;
    margin-right: 5%;
`
export const RestImage= styled.img`
    width: 100%;
`
export const Restaurant= styled.div`
`

export const RestDetailsContainer= styled.div`
    width: 100%;
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
