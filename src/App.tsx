import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ProjectLayout } from "./zenz_container/ProjectLayout";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <ProjectLayout />
    </BrowserRouter>
  );
};

export default App;
