import ProductListPage from "./ProductListPage";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser, selectIsAdmin } from "../stores/user";

export default function Home() {
  const user = useSelector(selectUser);
  const isAdmin = useSelector(selectIsAdmin);
  return (
    <div style={{ paddingLeft: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col"><Header></Header></div>
          <div className="col"><h1>Hello, {isAdmin ? "Admin" : (user ? "User" : "Guest")} {user?.user_name}!</h1></div>
        </div>
      </div>
      <div><ProductListPage /></div>
    </div>
  )
};
