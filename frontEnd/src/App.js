import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import tech from "./pages/tech.js";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/technology" component={tech} />
    </BrowserRouter>
  );
};

export default App;
