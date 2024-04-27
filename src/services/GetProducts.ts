import { ProductType } from "../types/productType";

export const getProducts = async () => {
    const response = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC");
    const data = await response.json();
    console.log(data)
    return data.products as ProductType[];
};