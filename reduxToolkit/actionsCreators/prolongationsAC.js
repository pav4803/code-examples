import {
  getTeacherProlongations,
  getTeacherProlongationsAppointments,
  modyfyProlongationAppointment,
  deleteProlongationAppointment,
} from "../api/api";
import { commonSlice } from "../redusers/commonSlice";
import { commonDispatchFunc } from "../hooks/commonDispatch";

export const ProlongationsAC = {
  fetchTeacherProlongations: (...params) =>
    commonDispatchFunc(
      getTeacherProlongations,
      commonSlice.actions.teacherProlongationsFethingSuccess,
      ...params
    ),
};
