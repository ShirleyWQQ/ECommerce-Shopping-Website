import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage"
import ExamplePage from "./pages/ExamplePage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/products" element={<ProductListPage />} ></Route>
        <Route path="/product/:product_id" element={<Home />} ></Route>
        <Route path="/login" element={<Home />} ></Route>
        <Route path="/register" element={<Home />} ></Route>
        <Route path="/cart" element={<Home />} ></Route>
        <Route path="/user" element={<Home />} ></Route>
        <Route path="/example" element={<ExamplePage />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
