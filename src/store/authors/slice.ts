import { createSlice } from '@reduxjs/toolkit';

import { AuthorsState } from './types';
import { authorsGetThunk } from './thunk';

const NAME = 'authors';

const authorsInitialState: AuthorsState = {
	authors: [],
	isLoading: false,
	error: null,
};

const authorsSlice = createSlice({
	name: NAME,
	initialState: authorsInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(authorsGetThunk.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(authorsGetThunk.fulfilled, (state, action) => {
			state.isLoading = false;
			state.authors = action.payload.result;
		});
		builder.addCase(authorsGetThunk.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message || '';
		});
	},
});

export const authorsReducer = authorsSlice.reducer;
