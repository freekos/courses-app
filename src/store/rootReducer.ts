import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './user';
import { coursesReducer } from './courses';
import { authorsReducer } from './authors';

export const rootReducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
});
