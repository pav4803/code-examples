import { createSlice } from "@reduxjs/toolkit";
import { gpdCommonReducer } from "./gpdCommonReducer";
import { gpdTopicsReduser } from "./gpdTopicsReducer";
import { schoolBoysReducer } from "./schoolBoysReducer";
import { prolongationsReducer } from "./prolongationsReducer";
import { gpdRemarksReducer } from "./gpdRemarksReduser";
import { missingsReducer } from "./missingsReducer";
import { appointmentsReducer } from "./appointmentsReducer";
import { gpdErrorReducer } from "./gpdErrorReducer";

const initialState = {
  teacherprolongations: [],
  appointments: [],
  topics: [],
  schoolboys: [],
  missings: [],
  remarks: [],
  summarymissings: [],
  isLoading: false,
  error: null,
};
//create clice reduser
export const commonSlice = createSlice({
  name: "gpdReducer", //unique name
  initialState,
  reducers: {
    ...gpdCommonReducer,
    ...gpdTopicsReduser,
    ...schoolBoysReducer,
    ...prolongationsReducer,
    ...gpdRemarksReducer,
    ...missingsReducer,
    ...appointmentsReducer,
    ...gpdErrorReducer,
  },
  extraReducers: {},
});

//get and export reduser
export default commonSlice.reducer;
