import { commonSlice } from "../redusers/commonSlice";
import { commonDispatchFunc } from "../hooks/commonDispatch";

export const ErrorAC = {
  clearError: (...params) =>
    commonDispatchFunc(
      null,
      commonSlice.actions.clearError,
      ...params
    )
};
