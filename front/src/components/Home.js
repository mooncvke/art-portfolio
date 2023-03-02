import React from "react";
import "../css/Home.css";

const homePage = () => {
  return (
    <div className="img-container">
      <div className="container">
        <img
          className="photo"
          src={require("../photos/main/1.jpg")}
          alt="photo1"
        />
        <div className="middle">
          <div className="text"> Open</div>
        </div>
      </div>
      <div className="container">
        <img
          className="photo"
          src={require("../photos/main/2.jpeg")}
          alt="photo2"
        />
        <div className="middle">
          <div className="text"> Open </div>
        </div>
      </div>
      <div className="container">
        <img
          class="photo"
          src={require("../photos/main/3.jpeg")}
          alt="photo3"
        />
        <div className="middle">
          <div className="text"> Open</div>
        </div>
      </div>
    </div>
  );
};

export default homePage;
