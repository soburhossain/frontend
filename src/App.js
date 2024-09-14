import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/todo" element={<Todo></Todo>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
