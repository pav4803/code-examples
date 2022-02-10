import React from "react";
import styles from "./popUpUploadGPDconteiner.module.css";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const UploadTopic = (states, prolonginationID, fetchAllTopics, schoolId) => {
  //render block
  return (
    <>
      <div className={styles.buttonsConteiner}>
        <div className={styles.files + " " + styles.button_imp}>
          <input
            accept=".xlsx"
            className={styles.input + " " + styles.files_input}
            id="text-button-file_1"
            name="fileUp"
            multiple
            type="file"
            onChange={(e) => {
              selectFiles_1(
                states,
                e,
                prolonginationID,
                fetchAllTopics,
                schoolId
              );
            }}
          />
          <label htmlFor="text-button-file_1">
            <Button
              component="span"
              variant="contained"
              color="default"
              className={styles.button}
            >
              <span className={styles.leftTitle}>Завантажити теми</span>
              <CloudUploadIcon className={styles.rightIcon} />
            </Button>
          </label>
        </div>
      </div>
      <div className={styles.buttonsUploadConteiner}>
        <a
          href={states.school.journalTopics.getTopicsXLSX_GPD_FULL(
            prolonginationID
          )}
          download
        >
          <span className={styles.upLoadButton}>
            Вивантажити теми в файл формату XLSX
          </span>
        </a>
      </div>
      <div className={styles.uploadFirstTitle}>
        Для завантаження списку тем Вам необхідно імпортувати наступний файл
        формату XLSX на комп'ютер, заповнити його та експортувати у систему.
      </div>
      <div className={styles.files}>
        <a
          href={states.school.journalTopics.getTopicsXLSX_GPD_EMPTY()}
          download
        >
          <Button
            component="span"
            variant="contained"
            color="default"
            className={styles.button}
          >
            Скачати шаблон файлу
          </Button>
        </a>
      </div>
      <div className={styles.uploadText}>
        {states.school.baseData.UploadGood}
      </div>
    </>
  );
};

export default UploadTopic;

const postFiles = (_url, data, funcSetRowsMistakes, states) => {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    let fd = new FormData();
    let jsonData;
    fd.append("upload-file", data);
    request.open("POST", _url);
    request.setRequestHeader("X-Auth-Token", states.school.baseData.token);
    request.setRequestHeader("Api-key", states.school.baseData.apikey);
    request.onload = function () {
      if (request.status === 200 && request.readyState === 4) {
        jsonData = JSON.parse(request.responseText);
        funcSetRowsMistakes(jsonData);
        resolve(data);
      } else {
        reject(request.status);
      }
    };
    request.onerror = function (error) {
      reject(error);
    };
    request.send(fd);
  });
};

const selectFiles_1 = (
  states,
  value,
  prolongation_id,
  fetchAllTopics,
  schoolId
) => {
  let funcSetUploadGood = states.functions.setUploadGood;
  let funcSetRowsMistakes = states.functions.setRowsMistakes;
  let tempUrl =
    states.school.baseData.domen +
    "/v1/" +
    states.school.baseData.teacher.SchoolId +
    "/Prolongation/" +
    prolongation_id +
    "/Topic/Import/xlsx";
  for (let i = 0; i < value.target.files.length; i++) {
    const request = async (funcSetRowsMistakes) => {
      await postFiles(
        tempUrl,
        value.target.files[i],
        funcSetRowsMistakes,
        states
      )
        .then(
          (body) => {
            return body;
          },
          (err) => {
            if (err.type === "error") {
            } else if (err === 404 || err === 403) {
            }
          }
        )
        .then((body) => {
          if (states.school.baseData.RowsMistakes?.msg === "ok") {
            funcSetUploadGood("Теми успішно завантажені!");
          } else {
            funcSetUploadGood(
              `Не всі теми були корректно завантажені!  Деякі теми вже існують у списку.`
              //${states.school.baseData.RowsMistakes?.skipTopics?.length} 
            );
          }
          return body;
        })
        .then((body) => {
          fetchAllTopics(schoolId, prolongation_id);
          return body;
        });
    };
    request(funcSetRowsMistakes);
  }
};
