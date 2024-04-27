import { LocalStorageType } from "./localStorageTypes";
import { ProductType } from "./productType";

export type PropsProductType = {
    products: ProductType[];
    addProduct: (product: ProductType) => void;
};

export type PropsHeaderType = {
    quantityCart: number;
    showCartButton: () => void;
    showCart: boolean;
};

export type PropsCartPageType = {
    products: LocalStorageType[];
    addProduct: (product: ProductType) => void;
    showCartButton: () => void;
    removeProduct: (product: ProductType) => void;
};