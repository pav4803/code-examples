export const gpdRemarksReducer = {
  //GPD works actions creators
  GPDRemarksFethingSuccess(state, action) {
    state.isLoading = false;
    state.remarks = action.payload.Items;
  },
  GPDRemarkModifySuccess(state, action) {
    state.isLoading = false;
    state.remarks = [
      ...state.remarks?.filter((remark) => remark.id !== action.payload.id),
      action.payload,
    ];
  },
};
