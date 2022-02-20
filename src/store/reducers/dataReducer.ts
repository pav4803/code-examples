import {  InitialState, IData } from "./commonSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export const dataReducer = {
 //school boys actions creators
 allDataFethingSuccess(state: InitialState, action: PayloadAction<IData[]>) {
  state.isLoading = false;
  state.data = action.payload;
},
};
