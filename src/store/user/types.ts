import { UserRole } from 'src/api';

export interface UserState {
	id: string | null;
	isAuth: boolean;
	name: string | null;
	email: string | null;
	role: UserRole | null;
	token: string | null;
}
