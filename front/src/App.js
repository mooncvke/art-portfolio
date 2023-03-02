import { useState, useEffect } from "react";
import TradForm from "./components/Traditional";
import DigiForm from "./components/Digital";
import PhotoForm from "./components/Photography";
import HomePage from "./components/Home";
// import Main from "./components/Main";

import "./App.css";

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
            <h1>Art Portfolio</h1>
          </button>
        </ul>
        <ul>
          <li id="li">
            <button
              class="button"
              onClick={(value) => handlePageChange("traditional")}
            >
              Traditional
            </button>
          </li>
          <li id="li">
            <button
              class="button"
              onClick={(value) => handlePageChange("digi")}
            >
              Digital
            </button>
          </li>
          <li id="li">
            <button
              class="button"
              onClick={(value) => handlePageChange("photo")}
            >
              Photography
            </button>
          </li>
        </ul>
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
        <PhotoForm></PhotoForm>
      </div>
    );
  }
};

export default App;
