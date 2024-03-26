import { instance } from '../instance';
import { Response } from '../types';
import {
	AddAuthorArgs,
	Author,
	DeleteAuthorArgs,
	GetAuthorArgs,
} from './types';

export const authorsApi = {
	addAuthor: (args: AddAuthorArgs) => instance.post('/authors/add', args),
	getAuthors: (): Promise<Response<Author[]>> => instance.get('/authors/all'),
	getAuthor: ({ id }: GetAuthorArgs): Promise<Response<Author>> =>
		instance.get(`/authors/${id}`),
	deleteAuthor: ({ id }: DeleteAuthorArgs) => instance.delete(`/authors/${id}`),
};
