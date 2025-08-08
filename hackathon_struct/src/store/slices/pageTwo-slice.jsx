import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const pageTwoSlice = createSlice({
  name: "pageTwo",
  initialState: {
    previousTimes: [],
    previousTimesDB: [],
  },
  reducers: {
    loadPastTimes(state, action) {
      const { previousTimes } = action.payload;
      state.previousTimes = previousTimes;
      console.log("State Previous Times:", state.previousTimes);
      console.log("Server Previous Times:", previousTimes);
    },
    loadPastTimesDB(state, action) {
      const previousTimesDB = action.payload;
      console.log("State Previous Times:", state.previousTimes);
      state.previousTimesDB = previousTimesDB;
      console.log("DB Previous Times:", previousTimesDB);
    },
  },
});

const localPersistConfig = {
  key: "app",
  storage,
  whitelist: ["pageTwo"],
};

export const pageTwoActions = pageTwoSlice.actions;

const persistedpageTwoReducer = persistReducer(
  localPersistConfig,
  pageTwoSlice.reducer
);

export default persistedpageTwoReducer;
