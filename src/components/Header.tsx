import {
    CartStyled,
    HeaderStyled,
    TitleGroup,
    TitleH2,
  } from "../components/styled/HeaderStyled";
  import Mks from "../images/MKS.svg";
  import cart from "../images/Vector.svg";

export default function Header() {
  return (
    <>
    <HeaderStyled>
        <TitleGroup>
          <img src={Mks} alt="" />
          <TitleH2>Sistemas</TitleH2>
        </TitleGroup>
        <CartStyled>
          <img src={cart} alt="" />
          <span>0</span>
        </CartStyled>
      </HeaderStyled>
    </>
  );
}
