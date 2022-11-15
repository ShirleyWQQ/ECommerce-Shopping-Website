import ServerCheck from "../components/ServerCheck";
import ProductsPage from "../components/ProductsPage";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "../components/Table";

export default function Home() {
  const navigate = useNavigate();
  const navigateLogin = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/404")}>Go to 404</Button>
      <Button onClick={() => navigateLogin("/UserLogin")}>User Login</Button>
      <Button onClick={() => navigate("/404")}>Shopping Cart</Button>
      <Header></Header>
      <Button onClick={() => navigate("/404")}>Search</Button>
      <ServerCheck></ServerCheck>
      <ProductsPage></ProductsPage>
      <Table></Table>
    </div>
  )
}
