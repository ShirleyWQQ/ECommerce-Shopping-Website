import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage"
import UserLogin from "./pages/UserLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/404" element={<NoPage />} />
        <Route path="/UserLogin" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
