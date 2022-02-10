import React, { useEffect, useState } from "react";
import styles from "./popUpGPDconteiner.module.css";
import {
  UniversalSelect,
  UniversalInput,
} from "../../../../libraryUI/libraryUI";
import {
  data,
  dataLeapYear,
} from "../../month/dataYears";
import moment from "moment";

//create make object function
export const RenderWorkFunc = (
  item,
  setFunction,
  appointments,
  topics,
  setProlongationObject,
  currentPeriod,
  setCurrentPeriod,
  schoolId,
  prolongationID,
  academicYear
) => {
  //console.log(item);
  //set initial form for popUp
  let initialForm = {};
  //set create or edit
  if (!item) {
    initialForm = {
      AcademicYear: academicYear,
      EducationalActivities: null,
      ID: null,
      Month: 0,
      Number: null,
      ParentsActivities: null,
      ProlongationID: prolongationID,
      SchoolID: schoolId,
      SportsActivities: null,
      Title: null,
    };
  } else {
    initialForm = {
      AcademicYear: item?.AcademicYear ? item?.AcademicYear : "",
      EducationalActivities: item?.EducationalActivities
        ? item?.EducationalActivities
        : "",
      ID: item?.ID !== null && item?.ID !== undefined ? item?.ID : null,
      Month: item?.Month ? item?.Month : null,
      Number: Number(item?.Number) ? Number(item?.Number) : null,
      ParentsActivities: item?.ParentsActivities ? item?.ParentsActivities : "",
      ProlongationID: item?.ProlongationID ? item?.ProlongationID : "",
      SchoolID: item?.SchoolID ? item?.SchoolID : "",
      SportsActivities: item?.SportsActivities ? item?.SportsActivities : "",
      Title: item?.Title ? item?.Title : "",
    };
  }
  //set forms state
  let [form, setForm] = useState({ ...initialForm });
  //set prolongationForm
  let initialProlForm = {
    prolongationID: 0,
  };
  let [prolongationForm, setProlongationID] = useState({ ...initialProlForm });
  //set input_1 changeHandler
  const select_ChangeHandler = (event) => {
    setProlongationID({ ...prolongationForm, prolongationID: Number(event) });
  };
  //set month changeHandler
  const select_Month_ChangeHandler = (event) => {
    setForm({ ...form, Month: Number(event) });
  };
  //set select changeHandler
  const input_2ChangeHandler = (event) => {
    setForm({ ...form, EducationalActivities: event });
  };
  //set content changeHandler
  const contentChangeHandler = (event) => {
    setForm({ ...form, SportsActivities: event });
  };
  //set notes changeHandler
  const notesChangeHandler = (event) => {
    setForm({ ...form, ParentsActivities: event });
  };
  //set changeHandlers
  const numberChangeHandler = (event) => {
    setForm({ ...form, Number: Number(event) });
  };
  //get only free prolongations appointment
  let freeProlongationsAppointments = appointments?.filter(
    (app) => new Date(app?.Date) >= new Date(currentPeriod?.start)
  );
  freeProlongationsAppointments = freeProlongationsAppointments?.filter(
    (app) => new Date(app?.Date) <= new Date(currentPeriod?.end)
  );
  //console.log(themes, freeProlongationsAppointments);
  topics?.forEach((topic) => {
    freeProlongationsAppointments = freeProlongationsAppointments?.filter(
      (app) => app.ProlongationTopicID !== topic.ID
    );
  });
  //get current Data
  const currentData = moment(new Date())?.format("YYYY-MM-DD");
  //get current year number type
  const currentYear = Number(currentData.slice(0, 4));
  //get current month number type
  const currentMonth = Number(currentData.slice(5, 7));
  //check is year leap
  const isYearLeap = new Date(currentYear, 1, 29).getMonth() == 1;
  //set choosed year data from year array
  const commonYearDataArray = (isYearLeap ? dataLeapYear : data)
    ?.slice()
    ?.sort((a, b) => a.monthNumber - b.monthNumber);
  const yearData = commonYearDataArray[form?.Month - 1];
  //set current period year
  let periodYear = currentYear;
  if (yearData?.monthNumber < 9 && currentMonth >= 9) {
    periodYear = currentYear + 1;
  }
  if (yearData?.monthNumber >= 9 && currentMonth < 9) {
    periodYear = currentYear - 1;
  }
  //set current period object
  let currentPeriodObj = {
    start: `${periodYear}-${yearData?.monthNumberString}-01`,
    end: `${periodYear}-${yearData?.monthNumberString}-${yearData?.daysString}`,
    text: `${yearData?.monthText}`,
  };
  // set optiobs array for months
  let optionsMonthArray = (isYearLeap ? dataLeapYear : data)?.map((item) => {
    return { id: item.monthNumber, Title: item.monthText };
  });
  // set optiobs array for select
  let optionsArray = freeProlongationsAppointments?.map((item) => {
    return { id: item.ID, Title: moment(item.Date).format("DD.MM.YYYY") };
  });
  optionsArray?.sort((a, b) => new Date(a.Title) - new Date(b.Title));
  //check is current topic binded
  let bindedCurrentTopic = {};
  if (item) {
    bindedCurrentTopic = appointments?.find(
      (prol) => prol.ProlongationTopicID === item?.ID
    );
  } else {
    bindedCurrentTopic = {};
  }
  const isCurrentTopicBinded = !!bindedCurrentTopic?.ProlongationTopicID;
  // set options objects
  let mokOption = {
    options: optionsArray,
    key: "id",
    value: "Title",
  };
  let mokMonthsOption = {
    options: [
      { id: -1, Title: "Оберіть/змініть місяць проведення заняття" },
      ...optionsMonthArray,
    ],
    key: "id",
    value: "Title",
  };
  //if ree prolongations appointments absent
  if (freeProlongationsAppointments?.length === 0) {
    if (isCurrentTopicBinded) {
      mokOption = {
        options: [
          {
            id: -1,
            Title: `Дата вибрана на ${moment(bindedCurrentTopic?.Date).format(
              "DD.MM.YYYY"
            )}. У вас відсутні вільні дати.`,
          },
        ],
        key: "id",
        value: "Title",
      };
    } else {
      mokOption = {
        options: [
          {
            id: -1,
            Title: `У вас відсутні вільні дати.`,
          },
        ],
        key: "id",
        value: "Title",
      };
    }
  } else {
    if (isCurrentTopicBinded) {
      mokOption = {
        options: [
          {
            id: -1,
            Title: `Дата вибрана на ${moment(bindedCurrentTopic?.Date).format(
              "DD.MM.YYYY"
            )}`,
          },
        ],
        key: "id",
        value: "Title",
      };
    } else {
      mokOption = {
        options: [
          { id: -1, Title: "Оберіть/змініть дату заняття" },
          ...optionsArray,
        ],
        key: "id",
        value: "Title",
      };
    }
  }
  if (form?.Month === 0) {
    mokOption = {
      options: [{ id: -1, Title: "Ви не обрали місяць проведення заняття" }],
      key: "id",
      value: "Title",
    };
  }
  //find and correct current prolongation
  useEffect(() => {
    if (prolongationForm.prolongationID !== 0) {
      setProlongationObject({
        ...appointments?.find(
          (prol) => prol.ID === prolongationForm.prolongationID
        ),
        ProlongationTopicID: form?.ID,
        ProlongationTopicNumber: form?.Number,
        ProlongationTopicTitle: form?.Title,
        SportsActivities: form?.SportsActivities,
        EducationalActivities: form?.EducationalActivities,
      });
    }
  }, [prolongationForm.prolongationID]);
  //control current conteinerWidth
  useEffect(() => {
    setFunction(form);
  }, [form]);
  //control current conteinerWidth
  useEffect(() => {
    setCurrentPeriod(currentPeriodObj);
  }, [form?.Month]);
  //render block
  return (
    <div className={styles.formsConteiner}>
      <UniversalSelect
        containerStyle={{ height: 34, marginBottom: 0, marginTop: 35 }}
        name="Month"
        placeholderSize="14px"
        option={mokMonthsOption}
        value={form.Month || 0}
        onChange={select_Month_ChangeHandler}
        lable="Місяць проведення заняття"
        width="100%"
        textAlign="left"
        labelFontSize={16}
        labelLeft={17}
      />
      <UniversalInput
        type="number"
        styleParent={{ width: "100%", marginTop: 21}}
        styleChild={{ fontSize: 14, height: 33 }}
        value={form.Number || 0}
        onChange={numberChangeHandler}
        lable="Встановити/змінити номер заняття по порядку"
      />
      {item && (
        <UniversalSelect
          containerStyle={{ height: 34, marginBottom: 0, marginTop: 10 }}
          name="date"
          placeholderSize="14px"
          option={mokOption}
          value={prolongationForm.prolongationID || 0}
          onChange={select_ChangeHandler}
          lable="Дата проведення заняття"
          width="100%"
          textAlign="left"
          labelFontSize={16}
          labelLeft={17}
        />
      )}
      <UniversalInput
        type="text"
        styleParent={{ width: "100%", marginTop: 20 }}
        styleChild={{ fontSize: 14, height: 33 }}
        value={form.EducationalActivities || ""}
        onChange={input_2ChangeHandler}
        lable="Виховна робота"
      />
      <UniversalInput
        type="text"
        styleParent={{
          width: "100%",
          height: 33,
          marginTop: 10,
        }}
        styleChild={{ fontSize: 14, height: 33 }}
        value={form.SportsActivities || ""}
        onChange={contentChangeHandler}
        lable="Фізкультурно-оздоровча робота"
      />
      <UniversalInput
        type="text"
        styleParent={{ width: "100%", marginTop: 10 }}
        styleChild={{ fontSize: 14, height: 33 }}
        value={form.ParentsActivities || ""}
        onChange={notesChangeHandler}
        lable="Робота з батьками"
      />
    </div>
  );
};
