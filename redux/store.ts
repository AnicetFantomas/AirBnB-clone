import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './HomeSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'


const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
}

const persistHomeReducer = persistReducer(persistConfig, homeReducer)

export const store = configureStore({
    reducer: {
        home: persistHomeReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store);