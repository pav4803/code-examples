export const gpdErrorReducer = {
  //error actions creators
  fethingError(state, action) {
    if(action.payload){
      state.isLoading = false;
      state.error = action.payload;
    } else state.isLoading = false;
  },
  clearError(state) {
      state.error = null;
      state.isLoading = false;
  },
};
