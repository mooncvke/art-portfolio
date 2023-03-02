import React from "react";
import "../css/Main.css";

const main = ({ sendPage }) => {
  const handlePageChange = (value) => {
    console.log("clicked:", value);
    sendPage(value);
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
          <button class="button" onClick={(value) => handlePageChange("digi")}>
            Digital
          </button>
        </li>
        <li id="li">
          <button class="button" onClick={(value) => handlePageChange("photo")}>
            Photography
          </button>
        </li>
      </ul>
    </div>
  );
};

export default main;
