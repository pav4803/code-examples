import React, { FunctionComponent } from "react";
import Navbar from "./components/Navbar";
import Router from "./components/Router";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
};

export default App;
