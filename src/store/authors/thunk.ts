import { createAsyncThunk } from '@reduxjs/toolkit';

import {
	AddAuthorArgs,
	DeleteAuthorArgs,
	GetAuthorArgs,
	authorsApi,
} from 'src/api';

export const authorsGetThunk = createAsyncThunk('authors/getAuthors', () => {
	return authorsApi.getAuthors();
});

export const authorGetThunk = createAsyncThunk(
	'authors/getAuthor',
	(args: GetAuthorArgs) => {
		return authorsApi.getAuthor(args);
	}
);

export const authorAddThunk = createAsyncThunk(
	'authors/addAuthor',
	(args: AddAuthorArgs) => {
		return authorsApi.addAuthor(args);
	}
);

export const authorDeleteThunk = createAsyncThunk(
	'authors/deleteAuthor',
	(args: DeleteAuthorArgs) => {
		return authorsApi.deleteAuthor(args);
	}
);
