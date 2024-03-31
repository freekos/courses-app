import { createAsyncThunk } from '@reduxjs/toolkit';

import {
	AddCourseArgs,
	DeleteCourseArgs,
	UpdateCourseArgs,
	coursesApi,
} from 'src/api';

export const coursesGetThunk = createAsyncThunk(
	'courses/getCourses',
	async () => {
		return coursesApi.getCourses();
	}
);

export const courseAddThunk = createAsyncThunk(
	'courses/addCourse',
	async (args: AddCourseArgs) => {
		return coursesApi.addCourse(args);
	}
);

export const courseUpdateThunk = createAsyncThunk(
	'coruses/updateCourse',
	async (args: UpdateCourseArgs) => {
		return coursesApi.updateCourse(args);
	}
);

export const courseDeleteThunk = createAsyncThunk(
	'courses/deleteCourse',
	async (args: DeleteCourseArgs) => {
		return coursesApi.deleteCourse(args);
	}
);
