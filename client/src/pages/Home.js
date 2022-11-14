import ServerCheck from "../components/ServerCheck";
import ProductsPage from "../components/ProductsPage";
import Counter from "../components/Counter";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "../components/Table";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/404")}>Go to 404</Button>
      <Counter></Counter>
      <ServerCheck></ServerCheck>
      <ProductsPage></ProductsPage>
      <Table></Table>
    </div>
  )
}
