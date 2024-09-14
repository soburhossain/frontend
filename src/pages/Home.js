import React, { useState, useEffect } from "react";
import Footer from "../components/Footer.js";
import AboutMe from "../components/AboutMe.js";
import Header from "../components/Header.js";
import ProjectsDemo from "../components/ProjectsDemo.js";
import Topheading from "../components/Topheading.js";
import Login from "../components/Login.js";
import TodoImage from "../components/TodoImage.js";

export default function Home() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const [token, setToken] = useState("");

  const [isSignedUp, setIsSignedUp] = useState(false);

  // Check if token is present in localStorage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginClick = () => {
    setLoginClicked(!loginClicked);
  };

  return (
    <div>
      <Topheading />
      <Login
        setUser={setUser}
        user={user}
        isSignedUp={isSignedUp}
        setIsSignedUp={setIsSignedUp}
        token={token}
        setToken={setToken}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        loginClicked={loginClicked}
        setLoginClicked={setLoginClicked}
        handleLoginClick={handleLoginClick}
      />
      <Header
        setUser={setUser}
        user={user}
        token={token}
        setToken={setToken}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        loginClicked={loginClicked}
        setLoginClicked={setLoginClicked}
        handleLoginClick={handleLoginClick}
      />
      <ProjectsDemo />
      <TodoImage isLoggedIn={isLoggedIn} handleLoginClick={handleLoginClick} />
      <AboutMe />
      <Footer />
    </div>
  );
}
