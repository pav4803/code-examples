import React, { FunctionComponent } from "react";

const Loader: FunctionComponent = () => {
  return (
    <div className="loaderConteiner">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
