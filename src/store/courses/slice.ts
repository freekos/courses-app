import { createSlice } from '@reduxjs/toolkit';

import { CoursesState } from './types';
import { courseAddThunk, courseDeleteThunk, coursesGetThunk } from './thunk';

const NAME = 'courses';

const coursesInitialState: CoursesState = {
	courses: [],
	isLoading: false,
	error: null,
	isAdding: false,
	isDeleting: false,
};

const coursesSlice = createSlice({
	name: NAME,
	initialState: coursesInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(coursesGetThunk.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(coursesGetThunk.fulfilled, (state, action) => {
			state.isLoading = false;
			state.courses = action.payload.result;
		});
		builder.addCase(coursesGetThunk.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message || '';
		});
		builder.addCase(courseAddThunk.pending, (state) => {
			state.isAdding = true;
		});
		builder.addCase(courseAddThunk.fulfilled, (state) => {
			state.isAdding = false;
			// alert('Course created');
		});
		builder.addCase(courseAddThunk.rejected, (state) => {
			state.isAdding = false;
			// alert('Course create failed');
		});
		builder.addCase(courseDeleteThunk.pending, (state) => {
			state.isDeleting = true;
		});
		builder.addCase(courseDeleteThunk.fulfilled, (state) => {
			state.isDeleting = false;
		});
		builder.addCase(courseDeleteThunk.rejected, (state) => {
			state.isDeleting = false;
		});
	},
});

export const coursesReducer = coursesSlice.reducer;
