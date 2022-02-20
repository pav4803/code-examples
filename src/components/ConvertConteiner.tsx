import React, { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useActions } from "../store/hooks/useActions";
import ConvertComponent from "./ConvertComponent";

const ConvertConteiner: React.FC = () => {
  //get works data state by useSelector
  let { data, isLoading } = useSelector(
    (state: RootState) => state.commonSlice
  );
  //use actions creators by hoook useActions from allAC for dispatch
  const { fetchAllData } = useActions();
  //post new coordinates and value to server
  useEffect(() => {
    fetchAllData();
    //eslint-disable-next-line
  }, []);
  console.log(data);
  //render
  return (
    <div>
      <ConvertComponent rates={data}/>
    </div>
  );
};

export default memo(ConvertConteiner);

// //get initialInnerWidth
// const initialInnerWidth = window.innerWidth;
// //set state for window.innerWidth
// const [innerWidth, setInnerWidth] = useState(initialInnerWidth);
// //create set window width func
// const updateWindowWidth = () => {
//   setInnerWidth(window.innerWidth);
// };
// //get liseners
// useEffect(() => {
//   window.addEventListener("resize", updateWindowWidth);
//   return () => {
//     window.removeEventListener("resize", updateWindowWidth);
//   };
//   // eslint-disable-next-line
// }, []);
