import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import UserProfileDemo from "./UserProfileDemo.js";
import Login from "./Login.js";
import LogOutPopUp from "./LogOutPopUp.js";

export default function NavBar({
  handleLoginClick,
  setIsLoggedIn,
  token,
  setToken,
  isLoggedIn,
  isSignedUp,
  setIsSignedUp,
  loginClicked,
  setLoginClicked,
  user,
  setUser,
}) {
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [displayUserProfile, setDisplayUserProfile] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");

    if ((isLoggedIn || isSignedUp) && !popupShown) {
      setDisplayPopUp(true);
      localStorage.setItem("popupShown", "true");
    }
  }, [isLoggedIn, isSignedUp]);

  const handleLogOutPopUp = () => {
    setDisplayPopUp(true);
    localStorage.removeItem("popupShown");
  };

  const handleLogout = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      setToken("");
      handleLogOutPopUp();
    }
  };

  const handleClosePopup = () => {
    setDisplayPopUp(false);
  };

  const handleDisplayUserProfile = () => {
    setDisplayUserProfile(true);
  };

  const handleCloseUserProfile = () => {
    setDisplayUserProfile(false);
  };

  return (
    <div>
      <nav>
        <ul className="links">
          <li className="not-show">
            <a href="#about" className="border">
              About
            </a>
          </li>
          <li className="not-show">
            <a href="#project-heading" className="border" id="projects">
              Projects
            </a>
          </li>
          {isLoggedIn ? (
            <li className="nav-logout" onClick={handleLogout}>
              Logout
            </li>
          ) : (
            <li className="nav-login">
              <Link to="/" onClick={handleLoginClick}>
                Login
              </Link>
              <Routes>
                <Route
                  path="/"
                  element={<Login setIsSignedUp={setIsSignedUp} />}
                />
              </Routes>
            </li>
          )}
          <li className="not-show">
            <a href="#footer">Hire me</a>
          </li>
          <li className="not-show">
            <a href="#footer" className="border">
              Contacts
            </a>
          </li>

          {displayPopUp && (
            <LogOutPopUp setDisplayPopUp={handleClosePopup}>
              {isLoggedIn
                ? "You are logged in successfully"
                : isSignedUp
                ? "You have signed up successfully!"
                : "You are logged out successfully!"}
            </LogOutPopUp>
          )}

          <li>
            <i
              className="fa-solid fa-bars"
              onClick={handleDisplayUserProfile}
            ></i>
            {displayUserProfile & isLoggedIn ? (
              <div className="user-profile-demo">
                <UserProfileDemo
                  user={user}
                  token={token}
                  setUser={setUser}
                  handleCloseUserProfile={handleCloseUserProfile}
                />
              </div>
            ) : null}
          </li>
        </ul>
        {isLoggedIn && loginClicked && setLoginClicked(false)}
      </nav>
    </div>
  );
}
