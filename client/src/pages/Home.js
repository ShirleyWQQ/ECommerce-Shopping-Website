import ServerCheck from "../components/ServerCheck";
import ProductsPage from "../components/ProductsPage";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <div>
      <ServerCheck></ServerCheck>
      <ProductsPage></ProductsPage>
      <Counter></Counter>
    </div>
  )
}
