import { createSlice } from '@reduxjs/toolkit';

import { UserState } from './types';
import { userGetMeThunk, userLoginThunk, userLogoutThunk } from './thunk';

const NAME = 'user';

const userInitialState: UserState = {
	isAuth: false,
	id: null,
	name: null,
	email: null,
	role: null,
	token: null,
};

const userSlice = createSlice({
	name: NAME,
	initialState: userInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(userLogoutThunk.fulfilled, (state) => {
			state.isAuth = false;
			state.email = null;
			state.name = null;
			state.role = null;
			state.token = null;
		});
		builder.addCase(userLoginThunk.pending, (state) => {
			state.isAuth = false;
			state.email = null;
			state.name = null;
			state.role = null;
			state.token = null;
		});
		builder.addCase(userLoginThunk.fulfilled, (state, action) => {
			state.isAuth = true;
			state.token = action.payload.result;
			state.name = action.payload.user.name;
			state.email = action.payload.user.email;
		});
		builder.addCase(userLoginThunk.rejected, (state) => {
			state.isAuth = false;
			state.email = null;
			state.name = null;
			state.role = null;
			state.token = null;
		});
		builder.addCase(userGetMeThunk.fulfilled, (state, action) => {
			state.name = action.payload.result.name;
			state.email = action.payload.result.email;
			state.role = action.payload.result.role;
		});
	},
});

export const userReducer = userSlice.reducer;
