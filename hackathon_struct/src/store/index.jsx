import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import pageOneReducer from './slices/pageOne-slice';
import pageTwoReducer from './slices/pageTwo-slice';
import DashboardHomeReducer from './slices/dashboardhome-slice';



const isLocal = true;

export const rootReducer = combineReducers({
    pageOne: pageOneReducer,
    dashboardHome: DashboardHomeReducer,
    pageTwo: pageTwoReducer,

});

export const setupStore = (preloadedState) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState,
        devTools: isLocal,

        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                    ignoredPaths: ['register', 'rehydrate'],
                },
            }).concat(isLocal ? logger : []);
        }
        ,
    });
    const persistor = persistStore(store);
    return { store, persistor };
};