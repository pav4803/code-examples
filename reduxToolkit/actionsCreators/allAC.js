import { TopicsAC } from "./topicsAC";
import { SchoolBoysAC } from "./schoolBoysAC";
import { ProlongationsAC } from "./prolongationsAC";
import { RemarksAC } from "./remarksAC";
import { MissingsAC } from "./missingsAC";
import { AppointmentsAC } from "./appointmentsAC";
import { ErrorAC } from "./errorAC";

export const allAC = {
  ...TopicsAC,
  ...SchoolBoysAC,
  ...ProlongationsAC,
  ...RemarksAC,
  ...MissingsAC,
  ...AppointmentsAC,
  ...ErrorAC,
};
