import ServerCheck from "../components/ServerCheck";
import ProductsPage from "../components/ProductsPage";
import Counter from "../components/Counter";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <a href="/404">Go to 404</a>
      <Header></Header>
      <ServerCheck></ServerCheck>
      <ProductsPage></ProductsPage>
    </div>
  )
}
