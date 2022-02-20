import React, { useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useActions } from "../store/hooks/useActions";
import DeconvertComponent from "./DeconvertComponent";

const DeconvertConteiner: React.FC = () => {
  //get works data state by useSelector
  let { data } = useSelector(
    (state: RootState) => state.commonSlice
  );
  //use actions creators by hoook useActions from allAC for dispatch
  const { fetchAllData } = useActions();
  //post new coordinates and value to server
  useEffect(() => {
    fetchAllData();
    //eslint-disable-next-line
  }, []);
  //render
  return (
    <div>
      <DeconvertComponent rates={data}/>
    </div>
  );
};

export default memo(DeconvertConteiner);

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
