export const prolongationsReducer = {
  //prolongations actions creators
  teacherProlongationsFethingSuccess(state, action) {
    state.isLoading = false;
    state.teacherprolongations = action.payload?.Items;
  },
};
