import {
    CartStyled,
    HeaderStyled,
    TitleGroup,
    TitleH2,
  } from "../components/styled/HeaderStyled";
  import Mks from "../images/MKS.svg";
  import cart from "../images/Vector.svg";
import { PropsHeaderType } from "../types/PropsTypes";

export default function Header({quantityCart, showCartButton, showCart }: PropsHeaderType) {
  return (
    <>
    <HeaderStyled>
        <TitleGroup>
          <img src={Mks} alt="" />
          <TitleH2>Sistemas</TitleH2>
        </TitleGroup>
        {!showCart && <CartStyled onClick={() => showCartButton()}>
          <img src={cart} alt="" />
          <span>{quantityCart}</span>
        </CartStyled>}
      </HeaderStyled>
    </>
  );
}
