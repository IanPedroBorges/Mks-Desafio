import { useEffect, useState } from "react";
import { CardButton, CardDescription, CardGroupTitlePrice, CardImage, CardPrice, CardProduct, CardTitle, MainProductList } from "./styled/ProductsStyle";
import { getProducts } from "../services/GetProducts";
import { ProductType } from "../types/productType";

export default function Products() {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const allProducts = async () => {
            const response = await getProducts();
            setProducts(response);
        };
        allProducts();
    }, []);


  return (
    <>
        <MainProductList>
        {products && products.map((product) => (
            <CardProduct key={product.id}>
            <CardImage src={product.photo}/>
            <CardGroupTitlePrice>
            <CardTitle>
            {product.name}
            </CardTitle>
            <CardPrice>{product.price}</CardPrice>
            </CardGroupTitlePrice>
            <CardDescription>
            Redesigned from scratch and completely revised.
            </CardDescription>
            <CardButton>Adicionar ao carrinho</CardButton>
            </CardProduct>
        ))}
        </MainProductList>
    </>
  )
}
