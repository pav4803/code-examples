export const appointmentsReducer = {
  //appointments actions creators
  appointmentsFethingSuccess(state, action) {
    const copyItemsArray = [...action.payload?.Items];
    copyItemsArray?.forEach((item) => {
      item["Duration"] = 45;
      item["Class"] = "";
      item["LessonNumber"] = "ГПД";
      item["Part"] = item.Prolongation;
      item["StartTime"] = item.From;
      item["Subject"] = "ГПД";
    });
    state.isLoading = false;
    state.appointments = copyItemsArray;
  },
  appointmentModifySuccess(state, action) {
    state.isLoading = false;
    state.appointments = [
      ...state.appointments?.filter((prol) => prol.ID !== action.payload.ID),
      action.payload,
    ];
  },
  appointmentsUnbindSuccess(state) {
    state.isLoading = false;
    state.appointments = [...state.appointments];
  },
};
