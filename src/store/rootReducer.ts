import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './user';
import { coursesReducer } from './courses';
import { authorsReducer } from './authors';

const persistConfig = {
	version: 1,
	key: 'user',
	storage,
};

export const rootReducer = combineReducers({
	user: persistReducer(persistConfig, userReducer),
	courses: coursesReducer,
	authors: authorsReducer,
});
