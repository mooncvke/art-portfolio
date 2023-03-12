import { useState, useEffect } from "react";
import TradForm from "./components/Traditional";
import DigiForm from "./components/Digital";
import Photography from "./components/Photography";
import HomePage from "./components/Home";
// import Main from "./components/Main";
import "./css/App.css";

const App = () => {
  const [page, setPage] = useState("home");

  const Main = () => {
    const handlePageChange = (value) => {
      console.log("clicked:", value);
      setPage(value);
    };
    return (
      <div>
        <ul>
          <button class="button" onClick={(value) => handlePageChange("home")}>
            <div className="title">Art Portfolio</div>
          </button>
        </ul>
        <ul>
          <li id="li">
            <button
              class="button"
              onClick={(value) => handlePageChange("traditional")}
            >
              <h3>Traditional</h3>
            </button>
          </li>
          <li id="li">
            <button
              class="button"
              onClick={(value) => handlePageChange("digi")}
            >
              <h3>Digital</h3>
            </button>
          </li>
          <li id="li">
            <button
              class="button"
              onClick={(value) => handlePageChange("photo")}
            >
              <h3>Photography</h3>
            </button>
          </li>
        </ul>
        <hr className="line"></hr>
      </div>
    );
  };

  if (page === "home") {
    return (
      <div>
        {console.log("page: ", page)}
        <Main></Main>
        <HomePage></HomePage>
      </div>
    );
  }
  if (page === "traditional") {
    return (
      <div>
        {console.log("page: ", page)}
        <Main></Main>
        <TradForm></TradForm>
      </div>
    );
  }
  if (page === "digi") {
    return (
      <div>
        {console.log("page: ", page)}
        <Main></Main>
        <DigiForm></DigiForm>
      </div>
    );
  }
  if (page === "photo") {
    return (
      <div>
        <Main></Main>
        <Photography></Photography>
      </div>
    );
  }
};

export default App;
