import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './rootReducer';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistConfig = {
	version: 1,
	key: 'root',
	storage,
	whitelist: ['user'],
};

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
	persistConfig,
	rootReducer
);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
});
