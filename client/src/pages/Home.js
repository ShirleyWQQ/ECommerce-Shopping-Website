import Navigation from "../components/examples/Navigation";
import ProductListPage from "./ProductListPage";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/user";

export default function Home() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Navigation />
      {/* <Header></Header> */}
      <h1>Hello, {user?.user_name}!</h1>
      <ProductListPage />
    </div>
  )
};
