import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const pageOneSlice = createSlice({
  name: "pageOne",
  initialState: {
    previousTimes: [],
    removedTime: "",
    previousTimesDB: [],
    removedTimeDB: "",
  },
  reducers: {
    loadPastTimes(state, action) {
      const { previousTimes } = action.payload;
      state.previousTimes = previousTimes;
      console.log("State Previous Times:", state.previousTimes);
      console.log("Server Previous Times:", previousTimes);
    },
    removeLastTime(state, action) {
      const { previousTimes } = action.payload;
      state.previousTimes = previousTimes || [];
      console.log("State Previous Times:", state.previousTimes);
      console.log("Server Previous Times:", previousTimes);
    },
    loadRemovedTime(state, action) {
      const { removedTime } = action.payload;
      state.removedTime = removedTime || "";
      console.log("From Slice Removed last_time:", state.removedTime);
    },
    removeLastTimeDB(state, action) {
      const { previousTimesDB } = action.payload;
      state.previousTimesDB = previousTimesDB || [];
      console.log(
        "From Slice State Previous Times DB :",
        state.previousTimesDB
      );
      console.log(
        "From Slice Databse Itself Previous Times  :",
        previousTimesDB
      );
    },
    loadRemovedTimeDB(state, action) {
      const { removedTimeDB } = action.payload;
      state.removedTimeDB = removedTimeDB || "";
      console.log("From Slice Removed last_time DB:", state.removedTimeDB);
    },
  },
});

const localPersistConfig = {
  key: "app",
  storage,
};

export const pageOneActions = pageOneSlice.actions;

const persistedpageOneReducer = persistReducer(
  localPersistConfig,
  pageOneSlice.reducer
);

export default persistedpageOneReducer;
