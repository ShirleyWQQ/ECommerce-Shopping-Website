import ServerCheck from "../components/ServerCheck";
import ProductsPage from "../components/ProductsPage";
import Counter from "../components/Counter";
<<<<<<< HEAD
import Header from "../components/Header";
=======
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "../components/Table";
>>>>>>> a0186c564c0dcad0f342b175040a4685781b264c

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
<<<<<<< HEAD
      <a href="/404">Go to 404</a>
      <Header></Header>
=======
      <Button onClick={() => navigate("/404")}>Go to 404</Button>
      <Counter></Counter>
>>>>>>> a0186c564c0dcad0f342b175040a4685781b264c
      <ServerCheck></ServerCheck>
      <ProductsPage></ProductsPage>
      <Table></Table>
    </div>
  )
}
