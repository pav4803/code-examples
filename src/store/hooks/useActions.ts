import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allAC } from "../actionCreators/allAC";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allAC, dispatch);
};
