import ProductListPage from "./ProductListPage";
import { useSelector } from "react-redux";
import { selectUser, selectIsAdmin } from "../stores/user";
import Navigation from "../components/Navigation";
import { useState } from "react";

export default function Home() {
  const user = useSelector(selectUser);
  const isAdmin = useSelector(selectIsAdmin);
  const [searchWord, setSearchWord] = useState("");
  const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeChange= event => {
    setDarkMode(true);
    if (event.target.checked) {
      document.getElementById('pages').style.color = "white"
      document.getElementById('greeting').style.color = "white"
      document.getElementById('darkButton').style.color = "white"
      console.log(document.body.style.background = "#000000");

    } else {
      document.getElementById('pages').style.color = "black"
      document.getElementById('greeting').style.color = "black"
      document.getElementById('darkButton').style.color = "black"
      console.log(document.body.style.background = "white");

    }
  };

  return (
    <div style={{ paddingLeft: "20px" }}>
      {/* <div className="container">
        <div className="row">
          <div className="col">
            <div className="row" id="darkButton">Dark Mode:</div>
            <input type="checkbox" id="darkToggle" htmlFor="darkToggle" onChange={handleDarkModeChange}></input>
          </div>
        </div>
      </div> */}
      <div><ProductListPage darkMode={darkMode}/></div>
    </div>
  )
};
