import React from "react";
import "../css/Traditional.css";

const TraditionalSite = () => {
  const handleClick = () => {};

  return (
    <div>
      <h2>Tradiotional art works. Oil painting is my favorite.</h2>
      <div className="container">
        <div className="img-container">
          <img
            className="photo"
            src={require("../photos/trad/1.jpeg")}
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
            src={require("../photos/trad/2.jpeg")}
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
            src={require("../photos/trad/3.jpeg")}
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
            src={require("../photos/trad/4.jpeg")}
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
            src={require("../photos/trad/5.jpeg")}
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
            src={require("../photos/trad/6.jpeg")}
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

export default TraditionalSite;
