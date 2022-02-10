import React, { memo } from "react";
import SmallUniversalThemePopUp from "../../../../libraryUI/UniversalThemePopUp/SmallUniversalThemePopUp.js";

const PopUpConteiner = ({
  //general control functions
  popUpValue,
  setPopUpValue,
  //main inner render function
  innerRenderFunction,
  //main object control data
  mainObject,
  setMainObject,
  //action creations functions
  addCurrentTopic,
  modyfyCurrentTopic,
  modyfyJournalGPDAppointment,
  //current initial item
  currentItem,
  //action creators addition data
  appointments,
  topics,
  currentPeriod,
  setCurrentPeriod,
  prolongationObject,
  setProlongationObject,
  schoolId,
  prolonginationID,
  academicYear,
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
          title_2="Редагувати\створити тему"
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
          widthPopUp="768px"
          heightPopUp={currentItem ? "450px" : "400px"}
          heightTextPopUp="20px"
          bottomHeight="45px"
          buttonWidth="180px"
          type="confirm"
          textSize="30px"
          modalConteinerPadding="30px"
          titleConteinerPadding="0px"
          textButtonYes="Зберегти"
          textButtonNo="Вийти"
          createButtonExists={mainObject?.Month ? "true" : "false"}
          deleteButtonExists="true"
          clouseButtonExists="true"
          confirmContainerMarginTop="20px"
          confirmBtnYes={() => {
            if (addCurrentTopic) {
              addCurrentTopic(schoolId, prolonginationID, mainObject);
            }
            if (modyfyCurrentTopic) {
              modyfyCurrentTopic(
                schoolId,
                prolonginationID,
                mainObject.ID,
                mainObject
              );
            }
            if (prolongationObject?.ID) {
              modyfyJournalGPDAppointment(
                schoolId,
                prolonginationID,
                prolongationObject?.ID,
                prolongationObject
              );
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
          renderFunction={() =>
            innerRenderFunction(
              currentItem,
              setMainObject,
              appointments,
              topics,
              setProlongationObject,
              currentPeriod,
              setCurrentPeriod,
              schoolId,
              prolonginationID,
              academicYear
            )
          }
          shadowColor={shadow}
        ></SmallUniversalThemePopUp>
      )}
    </>
  );
};

export default memo(PopUpConteiner);
