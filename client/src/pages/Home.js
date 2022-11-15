import ServerCheck from "../components/ServerCheck";
import ProductsPage from "../components/ProductsPage";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "../components/Table";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/404")}>Go to 404</Button>
      <Button onClick={() => navigate("/UserLogin")}>User Login</Button>
      <Button onClick={() => navigate("/404")}>Shopping Cart</Button>
      <Header></Header>
      <ServerCheck></ServerCheck>
      <ProductsPage></ProductsPage>
      <Table></Table>
    </div>
  )
}
