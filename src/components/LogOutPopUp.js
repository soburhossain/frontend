import React from "react";

export default function LogOutPopUp({ setDisplayPopUp, children }) {
  const handleWipePopUp = () => {
    setDisplayPopUp(false);
  };
  return (
    <div className="logoutpopup">
      <div className="logoutpopupicon">
        <i class="fa-solid fa-check"></i>
      </div>
      <div className="logoutpopuptext">
        <p>{children}</p>
        <p className="logoutpopupcross" onClick={handleWipePopUp}>
          Okey
        </p>
      </div>
    </div>
  );
}
