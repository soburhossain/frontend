import React from "react";

export default function Colors() {
  return (
    <div>
      <div className="colorss container" id="colorss-nav">
        <div className="image">
          <img
            src="img/colors.png"
            alt="Colors project"
            title="Colors-project"
          />
        </div>

        <div className="colorss-text">
          <h2>
            We sell vibrant & eco-friendly paints,
            <br /> To decorate your house
          </h2>
          <p>June 27,2024</p>
          <p className="content">
            Decorate your home like paradise of peace and eligance.
          </p>

          <p>
            <a
              href="https://colorsnetlifyapp.netlify.app"
              className="colorss-link"
            >
              Visit the website &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
