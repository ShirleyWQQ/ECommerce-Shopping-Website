import ProductListPage from "./ProductListPage";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser, selectIsAdmin } from "../stores/user";
import Navigation from ".././components/examples/Navigation";
import { useState } from "react";

export default function Home() {
  const user = useSelector(selectUser);
  const isAdmin = useSelector(selectIsAdmin);
  const [searchWord, setSearchWord] = useState("");

  return (
    <div style={{ paddingLeft: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col"><Header setSearchWord={setSearchWord}></Header></div>
          <div className="col">
            <div className="row">Pages:</div>
            <div className="row"><Navigation /></div>
            <div className="row"><h1>Hello, {isAdmin ? "Admin" : (user ? "User" : "Guest")} {user?.user_name}!</h1></div>
          </div>
        </div>
      </div>
      <div><ProductListPage searchWord={searchWord}/></div>
    </div>
  )
};
