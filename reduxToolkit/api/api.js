import { get, post } from "../../../services/api/ajax";
import { config } from "../../../services/config";

const domen = config.domen;

//prolongations requests
export function getTeacherProlongations(schoolId, teacherId) {
  return get(`${domen}/v1/${schoolId}/Teacher/${teacherId}/Prolongation`).catch(
    function (error) {
      return { ERROR: error };
    }
  );
}

//appointments requests
export function getTeacherProlongationsAppointments(
  schoolId,
  teacherId,
  prologId,
  start,
  end
) {
  return get(
    `${domen}/v1/${schoolId}/Teacher/${teacherId}/Prolongation/${prologId}/Appointment?start=${start}&end=${end}`
  );
}

export function modyfyProlongationAppointment(
  schoolId,
  prolongationId,
  prolongationAppointmentId,
  body
) {
  return post(
    `${domen}/v1/${schoolId}/Prolongation/${prolongationId}/Appointment/${prolongationAppointmentId}/Update`,
    body
  );
}

export function unbindAllProlongationAppointments(schoolId, prolongationId) {
  return post(
    `${domen}/v1/${schoolId}/Prolongation/${prolongationId}/Topic/UnlinkAll`,
    {}
  );
}

//missing requests
export function getProlongationMissings(schoolId, prolongationId, start, end) {
  return get(
    `${domen}/v1/${schoolId}/Prolongation/${prolongationId}/Missing?start=${start}&end=${end}`
  );
}

export function addProlongationMissing(
  schoolId,
  prolongation_appointment_Id,
  body
) {
  return post(
    `${domen}/v1/${schoolId}/Prolongation/${prolongation_appointment_Id}/Missing`,
    body
  );
}

export function deleteProlongationMissing(
  schoolId,
  prolongation_appointment_Id,
  body
) {
  return post(
    `${domen}/v1/${schoolId}/Prolongation/${prolongation_appointment_Id}/Present`,
    body
  );
}

//summary nissings request
export function getSummaryMissings(schoolId, prolongationId) {
  return get(
    `${domen}/v1/${schoolId}/Prolongation/${prolongationId}/Missing/Summary`
  );
}

//remarks requests
export function getAllProlongationRemarks(schoolId, prolongationId) {
  return get(`${domen}/v1/${schoolId}/Prolongation/${prolongationId}/Remark`);
}

export function modifyProlongationRemark(schoolId, remarkId, newRemark) {
  return post(`${domen}/v1/${schoolId}/Remark/${remarkId}/Update`, newRemark);
}

//schoolboys requests
export function getAllSchoolboysByClassId(schoolId, classId) {
  return get(`${domen}/v1/${schoolId}/Class/${classId}/AllSchoolboys`);
}

//topic requests
export function getAllTopics(schoolId, prolongationId) {
  return get(`${domen}/v1/${schoolId}/Prolongation/${prolongationId}/Topic`);
}

export function modifyTopic(schoolId, prolongationId, topicId, newObject) {
  return post(
    `${domen}/v1/${schoolId}/Prolongation/${prolongationId}/Topic/${topicId}/Update`,
    newObject
  );
}

export function addTopic(schoolId, prolongationId, newObject) {
  return post(
    `${domen}/v1/${schoolId}/Prolongation/${prolongationId}/Topic/Create`,
    newObject
  );
}

export function removeTopic(schoolId, prolongationId, topicId) {
  return post(
    `${domen}/v1/${schoolId}/Prolongation/${prolongationId}/Topic/${topicId}/Remove`,
    {}
  );
}

export function removeAllTopics(schoolId, prolongationId) {
  return post(
    `${domen}/v1/${schoolId}/Prolongation/${prolongationId}/Topic/RemoveAll`,
    {}
  );
}
