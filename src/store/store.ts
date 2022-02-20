import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commonSlice from "./reducers/commonSlice";

//create main root reduser
const rootReducer = combineReducers({
  //or symply {}
  commonSlice,
});

//create redux toolkit wrapper like create store
export const setConfigureStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

//get main state types
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setConfigureStore>;
export type AppDispatch = AppStore["dispatch"];
