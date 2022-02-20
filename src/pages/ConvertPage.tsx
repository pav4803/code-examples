import React, { FunctionComponent } from "react";
import ConvertConteiner from "../components/ConvertConteiner";

const ConvertPage: FunctionComponent = () => {
  console.log("ConvertPage")
  //render conteiner component
  return (
    <div className="convertPage">
      <ConvertConteiner />
    </div>
  );
};

export default ConvertPage;
