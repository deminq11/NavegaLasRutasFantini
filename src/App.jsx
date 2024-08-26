import Navbar from "./components/NavBar"
import ItemList from "./components/ItemListContainer"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
      <ItemList greeting={"Bienvenidos!!"}/>
    </>
  )
}

export default App
