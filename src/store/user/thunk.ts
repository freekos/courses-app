import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginArgs, RegisterArgs, authApi, usersApi } from 'src/api';

export const userRegisterThunk = createAsyncThunk(
	'user/register',
	async (args: RegisterArgs) => {
		return authApi.register(args);
	}
);

export const userLoginThunk = createAsyncThunk(
	'user/login',
	async (args: LoginArgs) => {
		return authApi.login(args);
	}
);

export const userLogoutThunk = createAsyncThunk('user/logout', () => {
	return authApi.logout();
});

export const userGetMeThunk = createAsyncThunk('user/getMe', async () => {
	return usersApi.getMe();
});
