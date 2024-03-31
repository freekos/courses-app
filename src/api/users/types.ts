export interface User {
	id: string;
	name: string;
	email: string;
	role: UserRole;
}

export type UserRole = 'user' | 'admin';
