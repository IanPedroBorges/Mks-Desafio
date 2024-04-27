import styled from "styled-components";

export const MainCartPage = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    gap: 1.5rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 25;
    background-color: #0F52BA;
    z-index: 99;
`;

export const HeaderCartPage = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 3rem;
    color: #FFFFFF;
`;

export const CartProducts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    width: 95%;
    height: 5rem;
    border-radius: 20px;
    background-color: #FFFFFF;
`;

export const FooterCartPage = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 3rem;
    color: #FFFFFF;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
`;

export const CartButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    background-color: #000000;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
`;

export const CartAddButton = styled.div`
    border-width: 0px, 0px, 0px, 0px;
    border-style: solid;
    border-color: #BFBFBF;
    background: #FFFFFF;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
`;

export const CartAddAndRemoveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background-color: #FFFFFF;
    color: #000000;
    border: none;
    cursor: pointer;
`;

export const CartSpanQuantity = styled.span`
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding: 0.5rem;
`;