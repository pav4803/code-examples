export const missingsReducer = {
  //school boys actions creators
  missingsFethingSuccess(state, action) {
    state.isLoading = false;
    state.missings = action.payload?.Items;
  },
  missingModifySuccess(state, action) {
    state.isLoading = false;
    state.missings = [
      ...state.missings?.filter((missing) => missing.ID !== action.payload.ID),
      action.payload,
    ];
  },
  missingAddSuccess(state, action) {
    state.isLoading = false;
    state.missings = [...state.missings, action.payload];
  },
  deleteMissingSuccess(state, action) {
    state.isLoading = false;
    state.missings = [
      ...state.missings?.filter((missing) => missing.ID !== action.payload.ID)
    ];
  },
  summaryMissingsFethingSuccess(state, action) {
    state.isLoading = false;
    state.summarymissings = action.payload?.Items;
  },
};
