import { commonSlice } from "../redusers/commonSlice";

//common hold dispatch func
export const commonDispatchFunc = (apiFunc, responseFunc, ...args) => {
  const doSumsing = (...params) => async (dispatch) => {
    try {
      dispatch(commonSlice.actions.fethingStart());
      if (apiFunc) {
        const response = await apiFunc(...params);
        if (response.hasOwnProperty("ERROR")) {
          dispatch(commonSlice.actions.fethingError(response.ERROR));
        } else {
          dispatch(responseFunc(response));
          commonSlice.actions.fethingError();
        }
      } else dispatch(responseFunc());
    } catch (e) {
      dispatch(commonSlice.actions.fethingError(e.message));
    }
  };
  return doSumsing(...args);
};
