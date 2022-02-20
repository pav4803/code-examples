import { AppDispatch } from "../../store/store";
import { commonSlice } from "../reducers/commonSlice";

//common hold dispatch func
export const commonDispatchFunc = (
  apiFunc: any,
  responseFunc: any,
  ...args: any
) => {
  const doSumsing = (...params: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(commonSlice.actions.fethingStart());
      if (apiFunc) {
        const response = await apiFunc(...params);
        dispatch(responseFunc(response));
      } else {
        dispatch(responseFunc());
      }
      dispatch(commonSlice.actions.fethingError(""));
    } catch (e: any) {
      dispatch(commonSlice.actions.fethingError(e.message));
    }
  };
  return doSumsing(...args);
};