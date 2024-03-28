import { instance } from '../instance';
import { Response } from '../types';
import { User } from './types';

export const usersApi = {
	getMe: (): Promise<Response<User>> => instance.get('/users/me'),
};
