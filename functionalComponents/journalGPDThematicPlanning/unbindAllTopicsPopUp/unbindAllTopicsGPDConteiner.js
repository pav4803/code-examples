import React, { memo } from "react";
import SmallUniversalThemePopUp from "../../../../libraryUI/UniversalThemePopUp/SmallUniversalThemePopUp.js";

const UnbindAllTopicsGPDConteiner = ({
  //general control functions
  popUpValue,
  setPopUpValue,
  //main inner render function
  //main object control data
  //action creations functions
  unbindAllAppointments,
  fetchTeacherProlongationAppointments,
  //current initial item
  //action creators addition data
  schoolId,
  prolonginationID,
  teacherId,
  startYear,
  endYear,
  createListData,
  //CSS addition data
  shadow,
}) => {
  return (
    <>
      {popUpValue && (
        <SmallUniversalThemePopUp
          type="tr"
          close={() => {}}
          title=""
          title_2={
            createListData
              ? "Ви впевнені що бажаєте відв'язати всі теми?"
              : "У Вас відсутні привязані теми"
          }
          title_4=""
          title_5=""
          title_6=""
          listTitleFontSize="22px"
          listTitleFontLineHeight="1.6"
          textalign="center"
          listTitleFontColor="#51619C"
          listFontSize="16px"
          liststyletype="none"
          breakexistense="true"
          textindent="0px"
          liststyleposition="inside"
          top="0vh"
          left="0px"
          widthPopUp="468px"
          heightPopUp={createListData ? "160px" : "130px"}
          heightTextPopUp={createListData ? "70px" : "40px"}
          bottomHeight="45px"
          buttonWidth="180px"
          type="confirm"
          textSize="30px"
          modalConteinerPadding="30px"
          titleConteinerPadding="0px"
          textButtonYes="Відвязати"
          textButtonNo="Вийти"
          createButtonExists={createListData ? "true" : "false" }
          deleteButtonExists="true"
          clouseButtonExists="true"
          confirmContainerMarginTop="20px"
          confirmBtnYes={() => {
            if (unbindAllAppointments) {
              unbindAllAppointments(schoolId, prolonginationID).then(() => {
                fetchTeacherProlongationAppointments(
                  schoolId,
                  teacherId,
                  prolonginationID,
                  startYear,
                  endYear
                );
              });
            }
            setPopUpValue(false);
          }}
          confirmBtnNo={() => setPopUpValue(false)}
          firstButtonColor="#51619c"
          secondButtonColor="#51619c"
          firstButtonTextColor="white"
          secondButtonTextColor="white"
          position="fixed"
          borderRadius={2}
          mainBackgroundColor="#fff"
          isHeaderExists={false}
          buttonClouseDiametr={30}
          buttonClouseTop={5}
          buttonClouseRight={5}
          buttonConteinerWidth="410px"
          buttonClouseTop="15"
          buttonClouseRight="10"
          isHeaderExists="true"
          headerBackgroundColor="#51619C"
          renderFunction={() => {}}
          shadowColor={shadow}
        ></SmallUniversalThemePopUp>
      )}
    </>
  );
};

export default memo(UnbindAllTopicsGPDConteiner);
