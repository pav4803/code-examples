import React, { useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useActions } from "../store/hooks/useActions";
import RateComponent from "./RateComponent";

const RateConteiner: React.FC = () => {
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
      <RateComponent rates={data}/>
    </div>
  );
};

export default memo(RateConteiner);