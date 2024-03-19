import { instance } from '../instance';
import { LoginArgs, RegisterArgs } from './types';

export const authApi = {
	login: (args: LoginArgs) => instance.post('/login', args),
	register: (args: RegisterArgs) => instance.post('/register', args),
};
