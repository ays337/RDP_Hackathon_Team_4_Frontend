import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const pageOneSlice =
    createSlice(
        {
            name: 'pageOne',
            initialState: {
                previousTimes: [],
                removedTime: '',
            },
            reducers: {
                loadPastTimes(state, action) {
                    const { previousTimes } = action.payload;
                    state.previousTimes = previousTimes;
                    console.log('State Previous Times:', state.previousTimes);
                    console.log('Server Previous Times:', previousTimes);
                },
                removeLastTime(state, action) {
                    const { previousTimes } = action.payload
                    state.previousTimes = previousTimes || [];
                    console.log('State Previous Times:', state.previousTimes);
                    console.log('Server Previous Times:', previousTimes);
                },
                loadRemovedTime(state, action) {
                    const { removedTime } = action.payload;
                    state.removedTime = removedTime || '';
                    console.log('Removed last_time:', state.removedTime);
                }
            }
        }
    )

const localPersistConfig = {
    key: 'app',
    storage,
};


export const pageOneActions = pageOneSlice.actions;


const persistedpageOneReducer = persistReducer(localPersistConfig, pageOneSlice.reducer);

export default persistedpageOneReducer;
