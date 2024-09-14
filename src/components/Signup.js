import React, { useState } from "react";
import axios from "axios";

export default function Signup({ handleSignUpClick, setIsSignedUp }) {
  const [signupData, setSignupData] = useState({
    userName: "",
    email: "", // Corrected key from 'emai' to 'email'
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSignUpFormChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignUpFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://portfoliobackend-zuw0.onrender.com/api/user/signup",
        signupData
      );
      setIsLoading(false);
      setMessage(response.data.msg);
      setIsSignedUp(true);
    } catch (error) {
      console.error(error); // Improved error handling
      setIsLoading(false);
      setMessage("Sign up failed. Please try again."); // Provide user feedback
    }
  };

  return (
    <div>
      <div>
        <i
          className="fa-solid fa-x signup-cross"
          onClick={handleSignUpClick}
        ></i>
        <form className="signup-form" onSubmit={handleSignUpFormSubmit}>
          <div className="login-div">
            {" "}
            {/* Added className */}
            <h1 className="signup-heading">Sign Up</h1>
          </div>
          <div className="signup-div">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              required
              placeholder="Enter a user name"
              onChange={handleSignUpFormChange}
            />
          </div>
          <div className="signup-div">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              onChange={handleSignUpFormChange}
            />
          </div>
          <div className="signup-div">
            <label>Set a Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={handleSignUpFormChange}
            />
          </div>
          <div className="signup-btn2">
            {isLoading ? (
              <h3 className="signupFeedback">Please Wait...</h3>
            ) : (
              <h3 className="signupFeedback">{message}</h3>
            )}
            <button type="submit">Create an account</button>
          </div>
        </form>
      </div>
    </div>
  );
}
