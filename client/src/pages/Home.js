import ProductListPage from "./ProductListPage";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser, selectIsAdmin } from "../stores/user";
import Navigation from ".././components/examples/Navigation";
import { useState } from "react";

export default function Home() {
  const user = useSelector(selectUser);
  const isAdmin = useSelector(selectIsAdmin);
<<<<<<< HEAD

  var isDarkMode = "white"
  const handleChange = event => {
    if (event.target.checked) {
      isDarkMode = "white"
      document.getElementById('pages').style.color = "white"
      document.getElementById('greeting').style.color = "white"
      document.getElementById('darkButton').style.color = "white"
      console.log(document.body.style.background = "#000000");
      
    } else {
      isDarkMode = "black"
      document.getElementById('pages').style.color = "black"
      document.getElementById('greeting').style.color = "black"
      document.getElementById('darkButton').style.color = "black"
      console.log(document.body.style.background = "white");

    }
  };
=======
  const [searchWord, setSearchWord] = useState("");
>>>>>>> 7cd925ae500620732617fe82e63b548a86fa2e52

  return (
    <div style={{ paddingLeft: "20px" }}>
      <div className="container">
        <div className="row">
<<<<<<< HEAD
          <div className="col"><Header darkModeOn={isDarkMode}></Header></div>
=======
          <div className="col"><Header setSearchWord={setSearchWord}></Header></div>
>>>>>>> 7cd925ae500620732617fe82e63b548a86fa2e52
          <div className="col">
            <div className="row" id="pages">Pages:</div>
            <div className="row"><Navigation /></div>
            <div className="row" id="darkButton">Dark Mode:</div>
            <input type="checkbox" id="darkToggle" 
            label for= "darkToggle" onChange={handleChange}></input>
            <div className="row" id="greeting"><h1>Hello, {isAdmin ? "Admin" : (user ? "User" : "Guest")} {user?.user_name}!</h1></div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div id="productList"><ProductListPage darkModeOn={isDarkMode}/></div>
=======
      <div><ProductListPage searchWord={searchWord}/></div>
>>>>>>> 7cd925ae500620732617fe82e63b548a86fa2e52
    </div>
  )
};

      