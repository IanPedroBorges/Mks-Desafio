import { LocalStorageType } from "../types/localStorageTypes";

export const quantityProducts = (products: LocalStorageType[]) => {
    return products.reduce((acc, product) => acc + product.quantity, 0);
}

export const totalPrice = (products: LocalStorageType[]) => {
    return products.reduce((acc, product) => acc + product.quantity * product.price, 0);
};