import React from "react";

export default function Footer() {
  return (
    <div>
      <div>
        <div className="container-3">
          <div className="footer container" id="footer">
            <div className="contacts">
              <img
                src="img/profile.jpg"
                alt="Sobur Hossain"
                title="Sobur Hossain"
              />
              <h2>Sobur Hossain</h2>
              <p className="intro-text">
                I create beautiful websites faster,in a unique way which will be
                loved by your users and will make achieve your goals.I work
                start to the end to make my clients works done.
              </p>
              <p className="social">Find me on</p>
              <div className="icon-links">
                <li>
                  <a href="https://www.linkedin.com/in/sobur-hossain-373a01249/">
                    <i className="fa-brands fa-linkedin icon-link"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="live:.cid.bc6f1474b91a1687
                     "
                  >
                    <i className="fa-brands fa-skype icon-link"></i>
                  </a>
                </li>
                <li>
                  <a href="01744489218" type="num">
                    <i className="fa-brands fa-whatsapp icon-link"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/rishadislam.shobro">
                    <i className="fa-brands fa-facebook icon-link"></i>
                  </a>
                </li>
              </div>
            </div>
            <div className="quick-links">
              <h2>Quick Links</h2>
              <ul id="contacts">
                <li>
                  <a href="#projects">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">Hire Me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
