import { instance } from '../instance';
import { LoginArgs, RegisterArgs, Session } from './types';

export const authApi = {
	login: (args: LoginArgs): Promise<Session> => instance.post('/login', args),
	register: (args: RegisterArgs) => instance.post('/register', args),
};
