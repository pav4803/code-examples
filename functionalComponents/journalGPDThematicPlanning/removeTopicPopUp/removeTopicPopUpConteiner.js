import React, { memo } from "react";
import SmallUniversalThemePopUp from "../../../../libraryUI/UniversalThemePopUp/SmallUniversalThemePopUp.js";

const RemoveTopicPopUpConteiner = ({
  //general control functions
  popUpValue,
  setPopUpValue,
  //main inner render function
  //main object control data
  //action creations functions
  removeCurrentTopic,
  //current initial item
  currentItem,
  //action creators addition data
  schoolId,
  prolonginationID,
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
          title_2={createListData?.length > 0 ? "Бажаєте видалити тему? Відвяжіть дату!" : "Ви впевнені що бажаєте видалити тему?"}
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
          heightPopUp="130px"
          heightTextPopUp="40px"
          bottomHeight="45px"
          buttonWidth="180px"
          type="confirm"
          textSize="30px"
          modalConteinerPadding="30px"
          titleConteinerPadding="0px"
          textButtonYes="Видалити"
          textButtonNo="Вийти"
          createButtonExists={createListData?.length > 0 ? "false" : "true"}
          deleteButtonExists="true"
          clouseButtonExists="true"
          confirmContainerMarginTop="20px"
          confirmBtnYes={() => {
            if (removeCurrentTopic) {
              removeCurrentTopic(schoolId, prolonginationID, currentItem.ID);
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

export default memo(RemoveTopicPopUpConteiner);
