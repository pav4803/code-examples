import {
  getProlongationMissings,
  addProlongationMissing,
  deleteProlongationMissing,
  getSummaryMissings,
} from "../api/api";
import { commonSlice } from "../redusers/commonSlice";
import { commonDispatchFunc } from "../hooks/commonDispatch";

export const MissingsAC = {
  fetchAllMissings: (...params) =>
    commonDispatchFunc(
      getProlongationMissings,
      commonSlice.actions.missingsFethingSuccess,
      ...params
    ),
  addMissingSuccess: (...params) =>
    commonDispatchFunc(
      addProlongationMissing,
      commonSlice.actions.missingAddSuccess,
      ...params
    ),
  modyfyRateSuccess: (...params) =>
    commonDispatchFunc(
      addProlongationMissing,
      commonSlice.actions.missingModifySuccess,
      ...params
    ),
  removeMissingSuccess: (...params) =>
    commonDispatchFunc(
      deleteProlongationMissing,
      commonSlice.actions.deleteMissingSuccess,
      ...params
    ),
  fetchAllSummaryMissings: (...params) =>
    commonDispatchFunc(
      getSummaryMissings,
      commonSlice.actions.summaryMissingsFethingSuccess,
      ...params
    ),
};
