import { createAsyncThunk } from "@reduxjs/toolkit";
import * as dashboardHomeApi from "api/dashboardhome";
import { dashboardHomeActions } from "store/slices/dashboardhome-slice";

export const getAllTimes = createAsyncThunk(
  "dashboardhome/getTime",
  async (_, { dispatch }) => {
    try {
      const data = await dashboardHomeApi.getAlltimes();
      dispatch(dashboardHomeActions.loadPastTimes({ previousTimes: data }));
    } catch (error) {
      console.error("Error retrieving times:", error);
    }
  }
);

export const addCurrentTime = createAsyncThunk(
  "dashboardhome/addTime",
  async (currentTime, { dispatch }) => {
    try {
      await dashboardHomeApi.addCurrentTime(currentTime);
      dispatch(dashboardHomeActions.addCurrentTime({ currentTime }));
      dispatch(dashboardHomeActions.loadCurrentTime({ currentTime }));
      await dashboardHomeApi.addCurrentTimeDB(currentTime);
    } catch (error) {
      console.error("Error adding time:", error);
    }
  }
);
