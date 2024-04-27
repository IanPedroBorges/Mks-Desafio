import { totalPrice } from "../services/QuantityProducts";
import { PropsCartPageType } from "../types/PropsTypes";
import {
    CartAddAndRemoveButton,
    CartAddButton,
  CartButton,
  CartProducts,
  CartSpanQuantity,
  FooterCartPage,
  HeaderCartPage,
  MainCartPage,
} from "./styled/CartPageStyled";

export default function CartPage({ products, addProduct, showCartButton, removeProduct, finalyBuy }: PropsCartPageType) {
  return (
    <>
      <MainCartPage>
        <HeaderCartPage>
          <h2 style={{ width: "50%" }}>Carrinho de compras</h2>
          <button
            style={{
              padding: "0.6rem",
              borderRadius: "50%",
              color: "#FFFFFF",
              backgroundColor: "#000000",
              fontSize: "1em",
              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={() => showCartButton()}
          >
            X
          </button>
        </HeaderCartPage>
        {products &&
          products.map((product) => (
            <CartProducts key={product.id}>
              <img
                src={product.photo}
                alt={product.name}
                style={{ width: "48px" }}
              />
              <h3 style={{ width: "30%" }}>{product.name}</h3>
              <CartAddButton>
                <CartAddAndRemoveButton onClick={() => addProduct(product)}>+</CartAddAndRemoveButton>
                <CartSpanQuantity>{product.quantity}</CartSpanQuantity>
                <CartAddAndRemoveButton onClick={() => removeProduct(product)}>-</CartAddAndRemoveButton>
              </CartAddButton>


              <p>{product.price}</p>
            </CartProducts>
          ))}
        <FooterCartPage>
          <h3>Total</h3>
          <p>{`R$ ${totalPrice(products)}`}</p>
        </FooterCartPage>
        <CartButton onClick={() => finalyBuy()}>Finalizar Compra</CartButton>
      </MainCartPage>
    </>
  );
}
