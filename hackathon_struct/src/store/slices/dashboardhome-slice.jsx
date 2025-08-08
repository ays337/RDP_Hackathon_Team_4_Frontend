import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const dashboardHomeSlice = createSlice({
  name: "dashboardHome",
  initialState: {
    previousTimes: [],
    currentTime: "",
  },
  reducers: {
    loadCurrentTime(state, action) {
      const { currentTime } = action.payload;
      state.currentTime = currentTime;
      console.log("State Current Time:", state.currentTime);
    },
    addCurrentTime(state, action) {
      state.previousTimes.push(action.payload.currentTime);
      console.log("State Current Time:", state.currentTime);
    },
    loadPastTimes(state, action) {
      const { previousTimes } = action.payload;
      state.previousTimes = previousTimes;
      console.log("Dashboard Home State Previous Times:", state.previousTimes);
      console.log("Dashboard Home Server Previous Times:", previousTimes);
    },
  },
});

export const selectTimes = (state) => state.previousTimes;

console.log("selectTimes Previous Times:", selectTimes);
const localPersistConfig = {
  key: "app",
  storage,
};

export const dashboardHomeActions = dashboardHomeSlice.actions;

const persistedDashboardHomeReducer = persistReducer(
  localPersistConfig,
  dashboardHomeSlice.reducer
);

export default persistedDashboardHomeReducer;
