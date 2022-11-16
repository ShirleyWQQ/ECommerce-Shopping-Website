import ProductListPage from "./ProductListPage";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser,selectIsAdmin } from "../stores/user";

export default function Home() {
  const user = useSelector(selectUser);
  const isAdmin = useSelector(selectIsAdmin);
  return (
    <div>
      {/* <Header></Header> */}
      <h1>Hello, {isAdmin?"Admin":"User"} {user?.user_name}!</h1>
      <ProductListPage />
    </div>
  )
};
