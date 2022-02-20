import React, { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useActions } from "../store/hooks/useActions";

const App: React.FC = () => {
  //get initialInnerWidth
  const initialInnerWidth = window.innerWidth;
  //set state for window.innerWidth
  const [innerWidth, setInnerWidth] = useState(initialInnerWidth);
  //create set window width func
  const updateWindowWidth = () => {
    setInnerWidth(window.innerWidth);
  };
  //get liseners
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
    // eslint-disable-next-line
  }, []);
  //get works from state by useAppSelector whithout props
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
      <div>
        {data?.map((item) => {
          return (
            <div>
              <span>{item.ccy} :</span>
              <span>{item.buy}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(App);
