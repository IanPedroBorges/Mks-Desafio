import styled from "styled-components";

export const MainProductList = styled.main`

    width: 70vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 4rem;
    gap: 1.5rem;
`;

export const CardProduct = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 17.8rem;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CardImage = styled.img`
    width: 100px;
    height: 100px;
    margin-top: 1rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    background-size: cover;
    margin-bottom: 1rem;
`;

export const CardGroupTitlePrice = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    padding: 0 1rem;
`;

export const CardDescription = styled.p`
    font-size: 0.8rem;
    width: 80%;
    text-align: start;
    font-weight: 200;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #2C2C2C;
`;

export const CardTitle = styled.h3`
    font-size: 1em;
    font-weight: 400;
    line-height: 19px;
    color: #2C2C2C;
`;

export const CardPrice = styled.span`
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    text-align: left;
    color: #FFFFFF;
    background-color: #373737;
    border-radius: 5px;
    padding: 0.5rem;
`;

export const CardButton = styled.button`
    width: 100%;
    height: 2rem;
    background-color: #0F52BA;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    margin-top: 1rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #0F52C2;
        color: #FFFFFF;
    }
`;