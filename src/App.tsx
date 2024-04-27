import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import { ProductType } from "./types/productType";
import { getProducts } from "./services/GetProducts";
import { useLocalStorage } from "./hooks/uselocalStorage";
import { LocalStorageType } from "./types/localStorageTypes";
import { quantityProducts } from "./services/QuantityProducts";
import CartPage from "./components/CartPage";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [myProducts, setMyProducts] = useLocalStorage("products", []);

    useEffect(() => {
        const allProducts = async () => {
            const response = await getProducts();
            setProducts(response);
        };
        allProducts();
    }, []);

    const addProduct = (product: ProductType) => {
        const productExist = myProducts.find((item:LocalStorageType) => item.id === product.id);
        if (productExist) {
            const newProducts = myProducts.map((item:LocalStorageType) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setMyProducts(newProducts);
        } else {
            setMyProducts([...myProducts, { ...product, quantity: 1 }]);
        }
    };

    const showCartProducts = () => {
        setShowCart(!showCart);
    };

    const removeProduct = (product: ProductType) => {
        const productExist = myProducts.find((item:LocalStorageType) => item.id === product.id);
        if (productExist?.quantity === 1) {
            const newProducts = myProducts.filter((item:LocalStorageType) => item.id !== product.id);
            setMyProducts(newProducts);
        } else {
            const newProducts = myProducts.map((item:LocalStorageType) =>
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            );
            setMyProducts(newProducts);
        }
    };

   return (
    <>
      <Header quantityCart={quantityProducts(myProducts)} showCartButton={showCartProducts} showCart={showCart}/>
      <Products products={products} addProduct={addProduct}>
        
      </Products>
      {showCart && <CartPage products={myProducts} addProduct={addProduct} showCartButton={showCartProducts} removeProduct={removeProduct}/>}
    </>
  );
}

export default App;
