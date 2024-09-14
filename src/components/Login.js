import { useState } from "react";
import Signup from "./Signup.js";
import axios from "axios";

export default function Login({
  setUser,
  user,
  loginClicked,
  setToken,
  setLoginClicked,
  setIsLoggedIn,
  isSignedUp,
  setIsSignedUp,
}) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleLoginFormChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://portfoliobackend-zuw0.onrender.com/api/user/login",
        loginFormData
      );
      const { token, msg, user } = response.data;
      setMessage(msg);
      setIsLoading(false);

      if (token) {
        setToken(token);
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
      setMessage("Login failed. Please try again.");
      setIsLoading(false);
    }
  };

  const [signupClicked, setSignUpClicked] = useState(false);
  const handleSignUpClick = () => {
    setSignUpClicked((prev) => !prev);
    setLoginClicked(false);
  };

  const handleLoginCrossBtn = () => {
    setLoginClicked(false);
    setSignUpClicked(false);
  };

  return (
    <div className="login-container">
      {loginClicked && (
        <div className="login-overlay">
          <i
            className="fa-solid fa-x login-cross"
            onClick={handleLoginCrossBtn}
          ></i>
          <form className="login-form" onSubmit={handleLoginFormSubmit}>
            <div className="login-div">
              <h1 className="login-heading">User Login</h1>
            </div>
            <div className="login-div">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={loginFormData.email}
                onChange={handleLoginFormChange}
              />
            </div>
            <div className="login-div">
              <label htmlFor="password">Your Password</label>
              <input
                id="password"
                type="password"
                name="password"
                required
                placeholder="Password"
                value={loginFormData.password}
                onChange={handleLoginFormChange}
              />
            </div>
            <div className="login-btn">
              {isLoading ? (
                <h3 className="loginFeedback">Please wait...</h3>
              ) : (
                <h3 className="loginFeedback">{message}</h3>
              )}
              <button type="submit">Login</button>
            </div>
            <div>
              <p className="btm-btn">Don't have an account?</p>
            </div>
            <div className="signup-btn btm-btn">
              <button type="button" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      )}
      {signupClicked && (
        <Signup
          setUser={setUser}
          user={user}
          isSignedUp={isSignedUp}
          setIsSignedUp={setIsSignedUp}
          handleSignUpClick={handleSignUpClick}
        />
      )}
    </div>
  );
}
