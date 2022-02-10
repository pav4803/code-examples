import { getAllProlongationRemarks, modifyProlongationRemark } from "../api/api";
import { commonSlice } from "../redusers/commonSlice";
import { commonDispatchFunc } from "../hooks/commonDispatch";

export const RemarksAC = {
  fetchAllJournalGPDRemarks: (...params) =>
    commonDispatchFunc(
      getAllProlongationRemarks,
      commonSlice.actions.GPDRemarksFethingSuccess,
      ...params
    ),
  modyfyJournalGPDRemark: (...params) =>
    commonDispatchFunc(
      modifyProlongationRemark,
      commonSlice.actions.GPDRemarkModifySuccess,
      ...params
    ),
};
