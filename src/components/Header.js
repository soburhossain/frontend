import React from "react";
import NavBar from "./NavBar.js";
export default function Header({
  handleLoginClick,
  setIsLoggedIn,
  setToken,
  token,
  isLoggedIn,
  loginClicked,
  setLoginClicked,
  user,
  setUser,
}) {
  return (
    <div>
      <header className="heading container">
        <div className="profile">
          <img
            src="img/profile.jpg"
            alt="Profile-picture"
            title="Profile-Picture"
          />
          <h3>Sobur hossain</h3>
        </div>

        <div className="navigation">
          <NavBar
            user={user}
            setUser={setUser}
            loginClicked={loginClicked}
            setLoginClicked={setLoginClicked}
            isLoggedIn={isLoggedIn}
            token={token}
            setToken={setToken}
            setIsLoggedIn={setIsLoggedIn}
            handleLoginClick={handleLoginClick}
          ></NavBar>
        </div>
      </header>
    </div>
  );
}
