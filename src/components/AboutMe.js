import React from "react";

export default function AboutMe() {
  return (
    <div>
      <div className="about container" id="about">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="item-1 item">
            <img src="img/chemistry.jpg" alt="Chemistry" className="item-img" />
            <h4 className="about-card">
              Chemistry graduate from university of chittagong
            </h4>
          </div>

          <div className="item-2 item">
            <img src="img/html.jpg" alt="Website" className="item-img" />
            <h4 className="about-card">
              Build responsive MERN web appilocation using React,Nodejs,Mongodb
              and Express
            </h4>
          </div>

          <div className="item-3 item item-img">
            <img src="img/python.jpg" alt="Python" />
            <h4 className="about-card">
              Data analysis using python and its libraries and frameworks
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
