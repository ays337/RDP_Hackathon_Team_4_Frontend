import { createAsyncThunk } from "@reduxjs/toolkit";
import * as pageOneApi from "api/pageOne";
import { pageOneActions } from "store/slices/pageOne-slice";

export const getAllTimes = createAsyncThunk(
  "pageOne/getTime",
  async (_, { dispatch }) => {
    try {
      const data = await pageOneApi.getAlltimes();
      dispatch(pageOneActions.loadPastTimes({ previousTimes: data }));
    } catch (error) {
      console.error("Error retrieving times:", error);
    }
  }
);

export const removeLastTime = createAsyncThunk(
  "pageOne/removeLastTime",
  async (_, { dispatch }) => {
    try {
      const response = await pageOneApi.removeLastTime();
      const data = response.data;
      console.log(`Data From Remove Time ${data}`);
      dispatch(
        pageOneActions.removeLastTime({ previousTimes: data.previousTimes })
      );
      dispatch(pageOneActions.loadRemovedTime({ removedTime: data.last_time }));
    } catch (error) {
      console.error("Error Removing Time:", error);
    }
  }
);

export const removeLastTimeDB = createAsyncThunk(
  "pageOneDB/removeLastTime",
  async (_, { dispatch }) => {
    try {
      const response = await pageOneApi.removeLastTimeDB();
      const data = response.data;
      dispatch(
        pageOneActions.removeLastTimeDB({
          previousTimesDB: data.previousTimesDB,
        })
      );
      dispatch(
        pageOneActions.loadRemovedTimeDB({ removedTimeDB: data.removedTimeDB })
      );
    } catch (error) {
      console.error("Error Removing Time:", error);
    }
  }
);
