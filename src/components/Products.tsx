import { CardButton, CardDescription, CardGroupTitlePrice, CardImage, CardPrice, CardProduct, CardTitle, MainProductList } from "./styled/ProductsStyle";
import shoppingBag from '../images/shopping-bag.svg';
import { PropsProductType } from "../types/PropsTypes";

export default function Products({products, addProduct}: PropsProductType) {
    


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
            <CardButton onClick={ () => addProduct(product) }>
                <img src={shoppingBag} alt="" />
                COMPRAR
            </CardButton>
            </CardProduct>
        ))}
        </MainProductList>
    </>
  )
}
