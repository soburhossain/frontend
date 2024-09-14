import React from "react";

export default function Omnifood() {
  return (
    <div>
      <h1 id="project-heading" className="project-heading">
        My Projects
      </h1>
      <div className="omnifood container" id="omnifood-nav">
        <div className="image">
          <img
            src="img/omnifood.png"
            alt="Omnifood project"
            title="Omnifood-Project"
          />
        </div>
        <div className="omnifood-text">
          <h2>
            A healthy meal delivered to your door,
            <br /> every single day
          </h2>
          <p>May 21,2022</p>
          <p className="content">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>

          <p>
            <a
              href="https://omnifood-shuvro.netlify.app/"
              className="omni-link"
            >
              Visit the website &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
