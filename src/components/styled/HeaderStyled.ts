import styled from "styled-components";


export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    align-items: center;
    padding: 2rem;
    background-color:#0F52BA;
    color: #FFFFFF;
`;

export const TitleGroup = styled.div`
    display: flex;
    align-items: baseline;
`;

export const TitleH2 = styled.h2`
    size: 20px;
    line-height: 19px;
    margin-left: 0.4rem;
    font-weight: 200;
`;

export const CartStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 90px;
    height: 40px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-right: 1rem;
    color: black;
    cursor: pointer;
    border: none;
`;