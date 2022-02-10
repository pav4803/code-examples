import {
  getTeacherProlongationsAppointments,
  modyfyProlongationAppointment,
  unbindAllProlongationAppointments,
} from "../api/api";
import { commonSlice } from "../redusers/commonSlice";
import { commonDispatchFunc } from "../hooks/commonDispatch";

export const AppointmentsAC = {
  fetchTeacherProlongationAppointments: (...params) =>
    commonDispatchFunc(
      getTeacherProlongationsAppointments,
      commonSlice.actions.appointmentsFethingSuccess,
      ...params
    ),
  modyfyJournalGPDAppointment: (...params) =>
    commonDispatchFunc(
      modyfyProlongationAppointment,
      commonSlice.actions.appointmentModifySuccess,
      ...params
    ),
  unbindAllAppointments: (...params) =>
    commonDispatchFunc(
      unbindAllProlongationAppointments,
      commonSlice.actions.appointmentsUnbindSuccess,
      ...params
    ),
};
