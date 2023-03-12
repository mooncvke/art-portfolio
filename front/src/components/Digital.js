import React from "react";
import "../css/Digi.css";

const digiPage = () => {
  const handleClick = () => {};

  return (
    <div>
      <h1>
        Digital art works. Some paintings, some illustrations and even few
        posters.
      </h1>
      <div className="container">
        <div className="img-container">
          <img
            className="photo"
            src={require("../photos/digi/1.jpeg")}
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
            src={require("../photos/digi/2.jpeg")}
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
            src={require("../photos/digi/3.jpeg")}
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
            src={require("../photos/digi/4.jpeg")}
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
            src={require("../photos/digi/5.jpeg")}
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
            src={require("../photos/digi/6.jpeg")}
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

export default digiPage;
