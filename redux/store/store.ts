// store.ts
import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "../reducers/reducers";

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
