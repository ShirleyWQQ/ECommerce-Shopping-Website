import Navigation from "../components/examples/Navigation";
import ProductListPage from "./ProductListPage";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header></Header>
      <ProductListPage />
    </div>
  )
}
