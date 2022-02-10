import { getAllSchoolboysByClassId } from "../api/api";
import { commonSlice } from "../redusers/commonSlice";
import { commonDispatchFunc } from "../hooks/commonDispatch";

export const SchoolBoysAC = {
  fetchAllSchoolBoys: (...params) =>
    commonDispatchFunc(
      getAllSchoolboysByClassId,
      commonSlice.actions.schoolBoysFethingSuccess,
      ...params
    )
};
