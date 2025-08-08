import { createAsyncThunk } from "@reduxjs/toolkit";
import * as pageTwoApi from "api/pageTwo";
import { pageTwoActions } from "store/slices/pageTwo-slice";

export const getAllTimes = createAsyncThunk(
  "pageTwo/getTime",
  async (_, { dispatch }) => {
    try {
      const data = await pageTwoApi.getAlltimes();
      dispatch(pageTwoActions.loadPastTimes({ previousTimes: data }));
      const dbData = await pageTwoApi.getAlltimesDB();
      dispatch(pageTwoActions.loadPastTimesDB(dbData));
    } catch (error) {
      console.error("Error retrieving times:", error);
    }
  }
);
