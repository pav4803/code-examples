import React, { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../redux/gpd/hooks/useActions";
import styles from "./journalGPDThematicPlanning.module.css";
import moment from "moment";
import {
  data,
  dataLeapYear,
} from "../month/dataYears";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import {
  UniversalIconButton,
  PensilIcon,
  BasketIcon,
} from "../../../libraryUI/libraryUI";
import PopUpConteiner from "./popUp/popUpConteiner";
import UploadTopicsPopUpConteiner from "./uploadTopicsPopUp/uploadPopUpConteiner";
import { RenderWorkFunc } from "./popUp/popUpInnerFunc";
import UploadTopic from "./uploadTopicsPopUp/uploadTopicFunc";
import { LocalRoutes } from "../routes/localRoutes";
import { ExelLink } from "./exelLink/exelLink";
import LoaderContainer from "../LoaderContainer/LoaderContainer";
import RemoveTopicPopUpConteiner from "./removeTopicPopUp/removeTopicPopUpConteiner";
import RemoveAllTopicsPopUpConteiner from "./removeAllTopicsPopUp/removeAllTopicsPopUpConteiner";
import { ErrorsLink } from "../errorsLink/errorsLink";
import UnbindAllTopicsGPDConteiner from "./unbindAllTopicsPopUp/unbindAllTopicsGPDConteiner";

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontSize: 12,
    lineHeight: 1.3,
    padding: 3,
    backgroundColor: "#51619C",
    color: theme.palette.common.white,
    textAlign: "center",
    border: "1px solid #c3c3c3",
    "&:first-of-type": {
      borderLeft: "none",
      width: "10vw",
    },
    "&:nth-of-type(2)": {
      width: "5vw",
    },
    "&:nth-of-type(3)": {
      width: "25vw",
    },
    "&:nth-of-type(4)": {
      width: "30vw",
    },
    "&:nth-of-type(5)": {
      width: "25vw",
    },
    "&:nth-of-type(6)": {
      width: "5vw",
    },
  },
  body: {
    fontSize: 13,
    color: "#51619C",
    borderLeft: "1px solid #5C5C5C",
    borderBottom: "1px solid #5C5C5C",
    padding: "5px 0 5px 0",
    "&:first-of-type": {
      borderLeft: "none",
    },
    "&:nth-of-type(3)": {
      textAlign: "left",
      padding: "0 4px 0 4px",
    },
    "&:nth-of-type(4)": {
      textAlign: "left",
      padding: "0 4px 0 4px",
    },
    "&:nth-of-type(5)": {
      textAlign: "left",
      padding: "0 4px 0 4px",
    },
  },
}))(TableCell);

const JournalGPDThematicPlanning = ({ states }) => {
  const [mainObject, setMainObject] = useState({});
  const [popUpValue, setPopUpValue] = useState(false);
  const [uploadPopUpValue, setUploadPopUpValue] = useState(false);
  const [removePopUpValue, setRemovePopUpValue] = useState(false);
  const [unbindAllTopicPopUpValue, setUnbindAllTopicPopUpValue] = useState(
    false
  );
  const [currentPeriod, setCurrentPeriod] = useState({});
  const [prolongationObjectNull, setProlongationObjectNull] = useState({});
  //get initialInnerWidth
  const initialInnerWidth = window.innerWidth;
  //set state for window.innerWidth
  const [innerWidth, setInnerWidth] = useState(initialInnerWidth);
  //create set window width func
  const updateWindowWidth = () => {
    setInnerWidth(window.innerWidth);
  };
  //set outer conteiner style
  let currentOuterConteinerStyle = styles.outerConteiner;
  if (innerWidth < 1200) {
    currentOuterConteinerStyle = styles.outerConteinerSmall;
  }
  //control current conteinerWidth
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  }, [window]);
  //get profile data
  const academicYear = states?.school?.baseData?.academicYear;
  const schoolId = states?.school?.baseData?.schoolId;
  const teacherId = states?.school?.baseData?.teacherId;
  const startYear = states.school.baseData.startFirstAcademicSemester;
  const endYear = states.school.baseData.endSecondAcademicSemester;
  //get works from state by useAppSelector whithout props
  let { topics, teacherprolongations, appointments, error } = useSelector(
    (state) => state.GPD
  );
  //use actions creators by hoook useActions from allAC for dispatch
  const {
    fetchTeacherProlongationAppointments,
    fetchTeacherProlongations,
    fetchAllTopics,
    modyfyCurrentTopic,
    modyfyJournalGPDAppointment,
    addCurrentTopic,
    removeCurrentTopic,
    removeAllProlongationTopics,
    unbindAllAppointments,
    clearError,
  } = useActions();
  //get current Data
  const currentData = moment(new Date())?.format("YYYY-MM-DD");
  //get current year number type
  const currentYear = Number(currentData.slice(0, 4));
  //get current month number type
  const currentMonth = Number(currentData.slice(5, 7));
  //check is year leap
  const isYearLeap = new Date(currentYear, 1, 29).getMonth() == 1;
  //create data year render array
  let dataYearObjArr = [];
  //create themes monthes array
  let topicsMonthesArr = [];
  if (topics && topics?.length > 0) {
    topicsMonthesArr = [...new Set(topics?.map((topic) => topic.Month))];
  }
  //create all needed data arrays
  (isYearLeap ? dataLeapYear : data)?.forEach((obj, idx) => {
    //check is monthes themes exists
    const isMonthTopicExists = !!topicsMonthesArr.find(
      (month) => month === obj.monthNumber
    );
    //if themes is not exists
    if (
      topics?.length === 0 ||
      topics?.length === null ||
      topics?.length === undefined
    ) {
      if (
        Number(moment(new Date()).format("YYYY-MM-DD").slice(5, 7)) ===
        obj.monthNumber
      ) {
        dataYearObjArr = [...dataYearObjArr, obj];
      }
    }
    //if themes exists
    if (topics?.length > 0) {
      if (isMonthTopicExists) {
        dataYearObjArr = [...dataYearObjArr, obj];
      }
    }
  });
  //get themes in useEffect
  useEffect(() => {
    if (error) {
      clearError();
    }
    if (topics && topics?.length === 0 && teacherprolongations?.length > 0) {
      fetchAllTopics(schoolId, teacherprolongations[0]?.ID);
    }
    if (teacherprolongations?.length === 0) {
      fetchTeacherProlongations(schoolId, teacherId);
    }
    if (appointments?.length === 0 && teacherprolongations?.length > 0) {
      fetchTeacherProlongationAppointments(
        schoolId,
        teacherId,
        teacherprolongations[0]?.ID,
        startYear,
        endYear
      );
    }
    // eslint-disable-next-line
  }, []);
  //scroll memory blok
  useEffect(() => {
    document
      .getElementById("planningScrollComponent")
      .addEventListener("scroll", (ev) => {
        localStorage.setItem(
          "scrollTopPlanning",
          JSON.stringify(ev?.target.scrollTop)
        );
      });
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    document
      .getElementById("planningScrollComponent")
      .scrollTo(0, JSON.parse(localStorage.getItem("scrollTopPlanning")));
    // eslint-disable-next-line
  }, []);
  //render block
  return (
    <div className={currentOuterConteinerStyle}>
      <LoaderContainer />
      <UploadTopicsPopUpConteiner
        //general control functions
        popUpValue={uploadPopUpValue}
        setPopUpValue={setUploadPopUpValue}
        //main inner render function
        innerRenderFunction={UploadTopic}
        //main object control data
        mainObject={mainObject}
        setMainObject={setMainObject}
        //action creations functions
        modyfyCurrentTopic={modyfyCurrentTopic}
        modyfyJournalGPDAppointment={modyfyJournalGPDAppointment}
        //current initial item
        currentItem={null}
        //action creators addition data
        states={states}
        prolonginationID={teacherprolongations[0]?.ID}
        fetchAllTopics={fetchAllTopics}
        schoolId={schoolId}
        //CSS addition data
        shadow={0}
      />
      <RemoveAllTopicsPopUpConteiner
        //general control functions
        popUpValue={removePopUpValue}
        setPopUpValue={setRemovePopUpValue}
        //main inner render function
        //main object control data
        //action creations functions
        removeAllProlongationTopics={removeAllProlongationTopics}
        fetchTeacherProlongationAppointments={
          fetchTeacherProlongationAppointments
        }
        //current initial item
        //action creators addition data
        schoolId={schoolId}
        prolonginationID={teacherprolongations[0]?.ID}
        createListData={appointments?.some((app) => app.ProlongationTopicID)}
        //CSS addition data
        shadow={0}
      />
      <UnbindAllTopicsGPDConteiner
        //general control functions
        popUpValue={unbindAllTopicPopUpValue}
        setPopUpValue={setUnbindAllTopicPopUpValue}
        //main inner render function
        //main object control data
        //action creations functions
        unbindAllAppointments={unbindAllAppointments}
        fetchTeacherProlongationAppointments={
          fetchTeacherProlongationAppointments
        }
        //current initial item
        //action creators addition data
        schoolId={schoolId}
        prolonginationID={teacherprolongations[0]?.ID}
        teacherId={teacherId}
        startYear={startYear}
        endYear={endYear}
        createListData={appointments?.some((app) => app.ProlongationTopicID)}
        //CSS addition data
        shadow={0}
      />
      <div className={styles.checkListConteiner}>
        <LocalRoutes />
      </div>
      <div
        title="Завантажити теми"
        className={styles.exelConteiner}
        onClick={() => setUploadPopUpValue(true)}
      >
        <ExelLink />
      </div>
      <div title="Видалити всі теми" className={styles.basketDeleteConteiner}>
        <BasketIcon
          height="30"
          width="35"
          action={() => {
            setRemovePopUpValue(true);
          }}
        />
      </div>
      <div className={styles.unbindConteiner}>
        <span
          title="Відв'язати всі теми"
          className={styles.mainDataColumnTrasch}
          onClick={() => {
            setUnbindAllTopicPopUpValue(true);
          }}
        >
          &#215;
        </span>
      </div>
      <div
        title={`Наявні системні помилки! Перезавантажте сторінку або спробуйте пізніше. (${error})`}
        className={styles.errorConteiner}
      >
        {error && <ErrorsLink height="35" width="40" onClick={() => {}} />}
      </div>
      <div className={styles.mainTitle}>
        {innerWidth < 1180 ? (
          <h2>Календарно - тематичне планування</h2>
        ) : (
          <h1>Календарно - тематичне планування</h1>
        )}
      </div>
      <div id="planningScrollComponent" className={styles.commonConteiner}>
        {
          //(isYearLeap ? dataLeapYear : data)
          dataYearObjArr?.map((yearData, idx) => {
            //set current period year
            let periodYear = currentYear;
            if (yearData.monthNumber < 9 && currentMonth >= 9) {
              periodYear = currentYear + 1;
            }
            if (yearData.monthNumber >= 9 && currentMonth < 9) {
              periodYear = currentYear - 1;
            }
            //set current period object
            let currentPeriodObj = {
              start: `${periodYear}-${yearData.monthNumberString}-01`,
              end: `${periodYear}-${yearData.monthNumberString}-${yearData.daysString}`,
              text: `${yearData.monthText}`,
            };
            //current period GPD works
            let periodThemes = topics
              ?.filter(
                (topic) =>
                  Number(topic?.Month) ===
                  Number((currentPeriodObj?.start).slice(5, 7))
              )
              ?.sort((a, b) => Number(a.Number) - Number(b.Number));
            //render block
            return (
              <div key={idx}>
                <div className={styles.titleMonths}>
                  {innerWidth < 1180 ? (
                    <h3>{yearData.monthText}</h3>
                  ) : (
                    <h2>{yearData.monthText}</h2>
                  )}
                  <div title="Додати нову тему">
                    <UniversalIconButton
                      action={() => {
                        setPopUpValue(true);
                        setCurrentPeriod(currentPeriodObj);
                      }}
                      icon={ControlPointIcon}
                    />
                  </div>
                </div>
                <PopUpConteiner
                  //general control functions
                  popUpValue={popUpValue}
                  setPopUpValue={setPopUpValue}
                  //main inner render function
                  innerRenderFunction={RenderWorkFunc}
                  //main object control data
                  mainObject={mainObject}
                  setMainObject={setMainObject}
                  //action creations functions
                  addCurrentTopic={addCurrentTopic}
                  modyfyJournalGPDAppointment={modyfyJournalGPDAppointment}
                  //current initial item
                  currentItem={null}
                  //action creators addition data
                  appointments={appointments}
                  topics={topics}
                  currentPeriod={currentPeriod}
                  setCurrentPeriod={setCurrentPeriod}
                  prolongationObject={prolongationObjectNull}
                  setProlongationObject={setProlongationObjectNull}
                  schoolId={schoolId}
                  prolonginationID={teacherprolongations[0]?.ID}
                  academicYear={academicYear}
                  //CSS addition data
                  shadow={"rgba(0, 0, 0, 0.03)"}
                />
                <TableContainer
                  component={Paper}
                  style={{ width: "100%", marginBottom: "20px" }}
                >
                  <Table stickyHeader={true}>
                    {/* {periodThemes && periodThemes?.length > 0 && ( */}
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>
                          <div className={styles.outerDiv}>
                            <div className={styles.innerDiv}>
                              Дата проведення
                            </div>
                          </div>
                        </StyledTableCell>
                        <StyledTableCell>№ з/п</StyledTableCell>
                        <StyledTableCell>Виховна робота</StyledTableCell>
                        <StyledTableCell>
                          Фізкультурно-оздоровча робота
                        </StyledTableCell>
                        <StyledTableCell>Робота з батьками</StyledTableCell>
                        <StyledTableCell>Дії</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    {/* )} */}
                    <TableBody>
                      {periodThemes &&
                        periodThemes?.map((theme, index) => (
                          <TableUseRow
                            key={index}
                            index={index + 1}
                            item={theme}
                            modyfyCurrentTopic={modyfyCurrentTopic}
                            removeCurrentTopic={removeCurrentTopic}
                            appointments={appointments}
                            topics={topics}
                            modyfyJournalGPDAppointment={
                              modyfyJournalGPDAppointment
                            }
                            currentPeriod={currentPeriod}
                            setCurrentPeriod={setCurrentPeriod}
                            currentPeriodObj={currentPeriodObj}
                            schoolId={schoolId}
                            prolonginationID={teacherprolongations[0]?.ID}
                          />
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
export default memo(JournalGPDThematicPlanning);

//create render row component
const TableUseRow = memo(
  ({
    index,
    item,
    modyfyCurrentTopic,
    removeCurrentTopic,
    appointments,
    topics,
    modyfyJournalGPDAppointment,
    currentPeriod,
    setCurrentPeriod,
    currentPeriodObj,
    schoolId,
    prolonginationID,
  }) => {
    const [popUp, setPopUp] = useState(false);
    const [popUpTopic, setPopUpTopic] = useState(false);
    const [mainObject, setMainObject] = useState({});
    const [prolongationObject, setProlongationObject] = useState({});
    //render block
    console.log();

    return (
      <TableRow>
        <StyledTableCell align="center">
          <div>
            {createListsDateUseTopic(
              appointments,
              item,
              modyfyJournalGPDAppointment,
              schoolId,
              prolonginationID
            )}
          </div>
          <PopUpConteiner
            //general control functions
            popUpValue={popUp}
            setPopUpValue={setPopUp}
            //main inner render function
            innerRenderFunction={RenderWorkFunc}
            //main object control data
            mainObject={mainObject}
            setMainObject={setMainObject}
            //action creations functions
            modyfyCurrentTopic={modyfyCurrentTopic}
            modyfyJournalGPDAppointment={modyfyJournalGPDAppointment}
            //current initial item
            currentItem={item}
            //action creators addition data
            appointments={appointments}
            topics={topics}
            currentPeriod={currentPeriod}
            setCurrentPeriod={setCurrentPeriod}
            prolongationObject={prolongationObject}
            setProlongationObject={setProlongationObject}
            schoolId={schoolId}
            prolonginationID={prolonginationID}
            //CSS addition data
            shadow={0}
          />
          <RemoveTopicPopUpConteiner
            //general control functions
            popUpValue={popUpTopic}
            setPopUpValue={setPopUpTopic}
            //main inner render function
            //main object control data
            //action creations functions
            removeCurrentTopic={removeCurrentTopic}
            //current initial item
            currentItem={item}
            //action creators addition data
            schoolId={schoolId}
            prolonginationID={prolonginationID}
            createListData={createListsDateUseTopic(
              appointments,
              item,
              modyfyJournalGPDAppointment,
              schoolId,
              prolonginationID
            )}
            //CSS addition data
            shadow={0}
          />
        </StyledTableCell>
        <StyledTableCell align="center">{item?.Number}</StyledTableCell>
        <StyledTableCell align="center">
          {item?.EducationalActivities}
        </StyledTableCell>
        <StyledTableCell align="center">
          {item?.sportTime} {item?.SportsActivities}
        </StyledTableCell>
        <StyledTableCell align="center">
          {item?.ParentsActivities}
        </StyledTableCell>
        <StyledTableCell align="center">
          <div className={styles.iconOverlay}>
            <div title="Коректувати тему">
              <PensilIcon
                height="20"
                action={() => {
                  setCurrentPeriod(currentPeriodObj);
                  setPopUp(true);
                }}
              />
            </div>
            <div title="Видалити тему">
              <BasketIcon
                height="20"
                action={() => {
                  setPopUpTopic(true);
                }}
              />
            </div>
          </div>
        </StyledTableCell>
      </TableRow>
    );
  }
);

function createListsDateUseTopic(
  appointments,
  topic,
  modyfyJournalGPDAppointment,
  schoolId,
  prolonginationID
) {
  let tmp = null;
  if (appointments !== null && appointments?.length > 0) {
    const currentProlongation = appointments?.filter((item) => {
      return item?.ProlongationTopicID === topic.ID;
    })[0];
    let currentDeleteTopicProlongation = null;
    if (currentProlongation) {
      currentDeleteTopicProlongation = {
        ...currentProlongation,
        ProlongationTopicID: -1,
        ProlongationTopicNumber: 0,
        EducationalActivities: "",
        SportsActivities: "",
        SportsActivitiesTime: "",
        Embed: null,
      };
    }
    tmp = appointments
      ?.filter((item) => {
        return item?.ProlongationTopicID === topic.ID;
      })
      ?.map((item, idx) => {
        return (
          <div key={idx} className={styles.dataColumn}>
            <div className={styles.dataColumnNumber}>{
              `${moment(item?.Date).format("DD.MM")}`
              //(№ ${item?.LessonNumber})
            }</div>
            <div
              title="Відв'язати вказану дату від теми"
              className={styles.dataColumnTrasch}
              onClick={() => {
                if (currentProlongation) {
                  modyfyJournalGPDAppointment(
                    schoolId,
                    prolonginationID,
                    currentProlongation.ID,
                    currentDeleteTopicProlongation
                  );
                }
                // props.states.school.journalTopics?.setColumn(true, item.Id);
              }}
            >
              &#215;
            </div>
          </div>
        );
      });
  }
  return tmp;
}
