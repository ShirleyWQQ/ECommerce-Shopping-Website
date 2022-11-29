import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage"
import ExamplePage from "./pages/ExamplePage";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/user/CartPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/products" element={<ProductListPage />} ></Route>
        <Route path="/product/:product_id" element={<ProductPage />} ></Route>
        <Route path="/login" element={<LoginPage />} ></Route>
        <Route path="/register" element={<RegisterPage />} ></Route>
        <Route path="/cart" element={<CartPage />} ></Route>
        <Route path="/user" element={<Home />} ></Route>
        <Route path="/admin" element={<AdminPage />} ></Route>
        <Route path="/example" element={<ExamplePage />}></Route>
        <Route path="*" element={<NoPage />} />
        <Route path="/404" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
