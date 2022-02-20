import { fetchAllData } from "../../api/api";
import { commonSlice } from "../reducers/commonSlice";
import { commonDispatchFunc } from "../hooks/commonDispatch";

export const DataAC = {
  fetchAllData: (...params: any) =>
    commonDispatchFunc(
      fetchAllData,
      commonSlice.actions.allDataFethingSuccess,
      ...params
    ),
};
