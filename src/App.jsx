import Navbar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/items/ItemListContainer"
import ItemDetailContainer from "./components/items/ItemDetailContainer"
import CartMenu from "./components/Cart/CartMenu"
import CheckoutMenu from "./components/CheckoutMenu"
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "preline/preline";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<CartMenu/>}/>
        <Route path="/checkout" element={<CheckoutMenu/>}/>
      </Routes>
    </>
  )
}

export default App
