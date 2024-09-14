import React from "react";

export default function Pizza() {
  return (
    <div>
      <div className="pizza container" id="pizza-nav">
        <div className="image">
          <img
            src="img/webpizza.png"
            alt="Pizza project"
            title="Pizza-project"
          />
        </div>

        <div className="pizza-text">
          <h2>
            We prepare healthy and fresh pizza and other items,
            <br /> for your soul.
          </h2>
          <p>June 30,2024</p>
          <p className="content">Eat healthy and tasty pizza in chittagong</p>

          <p>
            <a href="https://shuvrospizza.netlify.app/" className="pizza-link">
              Visit the website &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
