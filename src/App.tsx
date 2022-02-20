import React, { FunctionComponent } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const App: FunctionComponent = () => {
  let { isLoading } = useSelector((state: RootState) => state.commonSlice);
  return (
    <div className="App">
      {isLoading && <Loader />}
      <Navbar />
      <Router />
    </div>
  );
};

export default App;
