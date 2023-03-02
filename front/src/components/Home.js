import React from "react";

const homePage = () => {
  return (
    <div className="img-container">
      <img
        class="img1 photo"
        src={require("../photos/main/1.jpg")}
        alt="photo1"
      />
      <img
        class="photo img2"
        src={require("../photos/main/2.jpeg")}
        alt="photo2"
      />

      <img
        class="photo img3"
        src={require("../photos/main/3.jpeg")}
        alt="photo3"
      />
    </div>
  );
};

export default homePage;
