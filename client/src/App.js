// import logo from './logo.svg';
import './App.css';
import ServerCheck from "./components/ServerCheck";
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <div className="App">
      <ServerCheck></ServerCheck>
      <ProductsPage></ProductsPage>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
