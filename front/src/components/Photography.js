import React from "react";
import "../css/Photo.css";

const photoPage = () => {
  const handleClick = () => {};

  return (
    <div>
      <h1>Photos. Taken with actual camera or with phone</h1>
      <div className="container">
        <div className="img-container">
          <img
            className="photo"
            src={require("../photos/photo/1.jpeg")}
            alt="photo1"
          />
          <div className="middle">
            <button className="text" onClick={handleClick}>
              Open
            </button>
          </div>
        </div>
        <div className="img-container">
          <img
            className="photo"
            src={require("../photos/photo/2.jpeg")}
            alt="photo2"
          />
          <div className="middle">
            <button className="text" onClick={handleClick}>
              Open
            </button>
          </div>
        </div>
        <div className="img-container">
          <img
            class="photo"
            src={require("../photos/photo/3.jpeg")}
            alt="photo3"
          />
          <div className="middle">
            <button className="text" onClick={handleClick}>
              Open
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="img-container">
          <img
            className="photo"
            src={require("../photos/photo/4.jpeg")}
            alt="photo1"
          />
          <div className="middle">
            <button className="text" onClick={handleClick}>
              Open
            </button>
          </div>
        </div>
        <div className="img-container">
          <img
            className="photo"
            src={require("../photos/photo/5.jpeg")}
            alt="photo2"
          />
          <div className="middle">
            <button className="text" onClick={handleClick}>
              Open
            </button>
          </div>
        </div>
        <div className="img-container">
          <img
            class="photo"
            src={require("../photos/photo/6.jpeg")}
            alt="photo3"
          />
          <div className="middle">
            <button className="text" onClick={handleClick}>
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default photoPage;
