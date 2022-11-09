import ServerCheck from "../components/ServerCheck";
import ProductsPage from "../components/ProductsPage";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <div>
      <a href="/404">Go to 404</a>
      <Counter></Counter>
      <ServerCheck></ServerCheck>
      <ProductsPage></ProductsPage>
    </div>
  )
}
