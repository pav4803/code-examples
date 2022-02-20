import { createSlice } from "@reduxjs/toolkit";
import { commonReducer } from "./commonReduser";
import { dataReducer } from "./dataReducer";

//data interfase
export interface IData {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}
//state interface
export interface InitialState {
  data: IData[];
  isLoading: boolean;
  error: string;
}
//create initial state
const initialState: InitialState = {
  data: [],
  isLoading: false,
  error: "",
};
//create clice reduser
export const commonSlice = createSlice({
  name: "reducer", //unique name
  initialState,
  reducers: {
    ...dataReducer,
    ...commonReducer,
  },
  extraReducers: {},
});

//get and export reduser
export default commonSlice.reducer;
