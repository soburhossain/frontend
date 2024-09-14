import React from "react";
import { Link } from "react-router-dom";

export default function TodoImage({ handleLoginClick, isLoggedIn }) {
  const handleIsLoggedIn = () => {
    if (!isLoggedIn) {
      handleLoginClick();
    }
  };

  return (
    <div className="todo-img-container">
      <img src="/img/Todo.png" alt="Todo" />
      <h4 className="branding">Please login to use this feature!</h4>
      <div className="open-todo-btn">
        {isLoggedIn ? (
          <Link to="/todo">
            <button>Open todo</button>
          </Link>
        ) : (
          <button onClick={handleIsLoggedIn}>Open todo</button>
        )}
      </div>
    </div>
  );
}
