import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { ContextProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer title="Productos Destacados" />}
            />
            <Route
              path="/categoria/:categoryId"
              element={<ItemListContainer title="Productos Destacados" />}
            />
            <Route
              path="/producto/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
