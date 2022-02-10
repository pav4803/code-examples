export const schoolBoysReducer = {
  //school boys actions creators
  schoolBoysFethingSuccess(state, action) {
    state.isLoading = false;
    state.schoolboys = action.payload.Schoolboys;
  },
};
