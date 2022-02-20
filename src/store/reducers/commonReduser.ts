import { InitialState } from "./commonSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export const commonReducer = {
  //common actions creators
  fethingStart(state: InitialState) {
    state.isLoading = true;
  },
  fethingError(state: InitialState, action: PayloadAction<any>) {
    state.isLoading = false;
    state.error = action.payload;
  },
};
